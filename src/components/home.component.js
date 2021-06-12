
import React,{ Component } from "react";
import axios from 'axios';
import { Redirect} from "react-router";
import Navbar from './nav.component'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Acceuil from './Pages/commercial/organigramme/Acceuil';
import BlekisCanaux from './Pages/commercial/organigramme/Blekis/Blekis.canaux'
import BlekisOrganigramme from './Pages/commercial/organigramme/Blekis/Blekis.organigramme'
import EmployeList from './employe/EmployeList'
import Statistique from './statistique.component'
import SearchAgency from "./employe/SearchAgency";
import SearchCode from "./employe/SearchCode";
import SearchEmploye from "./employe/SearchEmploye";
import RechercheAgency from "./Recherche.agency";
import RechercheName from "./Recherche.Nom";
import RechercheCode from "./Recherche.Code";
import BlekisOrganigrammegros from "./Pages/commercial/organigramme/Blekis/Blekis.organigrammeGros";
import BlekisOrganigrammegms from "./Pages/commercial/organigramme/Blekis/Blekis.organigrammegms";
import ItkaneCanaux from "./Pages/commercial/organigramme/AlItkane/AlItkane.canaux";
import ItkaneOrganigramme from "./Pages/commercial/organigramme/AlItkane/AlItakne.organigramme";



export default class Home extends Component{
   
componentDidMount=()=>{
    
    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
        }
    }
    if(this.props.user){
    axios.get(`user/${this.props.user.userId}`,config)

    .then(res=>{
        console.log(res.data.email)
        
    })
    .catch(err=>{
        console.log(err)
    })
}
}
    
render(){
    if (this.props.user){
        
    return(
        <div>
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Acceuil} />
          <Route path='/organigramme/blekis/canaux' exact component={BlekisCanaux} />
          <Route path='/organigramme/itkane/canaux' exact component={ItkaneCanaux} />
          <Route path='/organigramme/blekis/canaux/detail' exact component={BlekisOrganigramme} />
          <Route path='/organigramme/blekis/canaux/gros' exact component={BlekisOrganigrammegros} />
          <Route path='/organigramme/blekis/canaux/gms' exact component={BlekisOrganigrammegms} />

          <Route path='/organigramme/itkane/canaux/detail' exact component={ItkaneOrganigramme} />

          <Route path='/employe' exact component={EmployeList} />
          <Route path='/stats/:userid' exact component={Statistique} />
          <Route path='/agency/:userid' exact component={RechercheAgency} />
          <Route path='/code/:userid' exact component={RechercheCode} />
          <Route path='/name/:userid' exact component={RechercheName} />
          

        </Switch>
        </BrowserRouter>
       </div>
        
      )}
      else
      return(
          <Redirect to='/'/>
      )
}
}