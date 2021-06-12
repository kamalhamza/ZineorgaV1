
import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import Employe from './employe/Employe'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';

const RechercheAgency = (props) => {
    let employeId= props.match.params.userid;
    useEffect(() => {
        getEmployes();
        
        
    }, [])
    const Reload=(ok)=>{
        window.location.reload(ok);
    }

    const [employes,setEmployes]=useState([])
    const[loading,setLoading]=useState(false)
    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
        }
    }

    const getEmployes=async()=>{
        try{
            const res=await axios.get(`employe/agency/${employeId}`,config)
            setEmployes(res.data)
            setLoading(true)
        }catch(err){
            alert(err.message);
        }
    }
    return (
        <div >
            <Link to ='../../employe' className='retour'><AiIcons.AiFillCaretLeft style={{marginTop:5,marginLeft:-1000,fontSize:50}}/>
           </Link>
            <h1>{`Recherche Agence : ${employeId}`}</h1>
            <div className='bodycommerciaux'>
            <Fragment>
                {loading && 
                employes.map((employe)=>(

                    <Row>
                        <Employe employe={employe}/>
                        </Row>
        
    
                        
                      

                    
                ))}
            
        </Fragment>
        </div>
            
            
        </div>
    )
}

export default RechercheAgency
