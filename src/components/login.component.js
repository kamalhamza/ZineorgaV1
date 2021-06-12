import Alert from '@material-ui/lab/Alert';
import axios from "axios";
import React,{ Component } from "react";
import { Redirect } from "react-router";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import logo from '../Images/logo.jpg';


export default class Login extends Component{
state={}

handleSubmit= e =>{
    e.preventDefault();
    const data ={
        email:this.email,
        password:this.password
    }
    axios.post('user/login',data)
    .then(res=>{
        console.log(res)
        localStorage.setItem('token',res.data.token);
        window.location.reload();
        
        
        
        this.setState({
            LoggedIn:true
        });
        
    })
    .catch(err=>{
        console.log(err)
        this.setState({
            LoggedIn:false
        });
        
    })
}

render(){
   
    if (!this.props.user){
        if(this.state.LoggedIn===false){
            return(
                <div className="auth-wrapper">
        <div className="auth-inner">
            <div>
            <Alert severity="error">Email ou mot de passe incorrecte. Merci de réssayer</Alert>
            <button onClick={()=>{ this.setState({
            LoggedIn:true
        });}} className="btn btn-primary btn-block" >Réessayer</button>
            </div>
            </div>
      </div>
            )
        }
    
    return(
        <>
        <div className='navbarlogin'>
        </div>
        <div className="auth-wrapper" style={{marginTop:-80,marginBottom:-50}}>
        <div className="auth-inner">
        <form onSubmit={this.handleSubmit}>
        <Image src={logo} fluid />
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email"
            onChange={e=>this.email=e.target.value}
            />

        </div>
        <div className="form-group">
            <label>Mot de passe</label>
            <input type="password" className="form-control" placeholder="Mot de passe"
            onChange={e=>this.password=e.target.value}
            />

        </div>
        
    
        <button className="btn btn-info btn-block">Se connecter</button>
    </form>
    </div>
      </div>
     
      </>
        
      )}
      else{
        return(
          <Redirect to='/home'/>
        )
      }
}
}