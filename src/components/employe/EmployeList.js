import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios'
import {Col,Row} from 'react-bootstrap'
import Employe from './Employe'
import NavHome from '../../navhome'
import '../Pages/commercial/organigramme/orga.css';

const EmployeList = () => {
    useEffect(() => {
        getEmployes();
    }, [])

    const [employes,setEmployes]=useState([])
    const[loading,setLoading]=useState(false)
    const config={
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
        }
    }

    const getEmployes=async()=>{
        try{
            const res=await axios.get('employe',config)
            setEmployes(res.data)
            setLoading(true)
        }catch(err){
            alert(err.message);
        }
    }

    return (
        <div >
            <NavHome/>
        
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

export default EmployeList
