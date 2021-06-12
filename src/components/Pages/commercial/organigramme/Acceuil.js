import React from 'react'
import './orga.css'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

function Acceuil() {
  function alertee() {
    alert("Hello! I am an alert box!");
  }
    return (
        
        <div className='body' >
          <Link to='/organigramme/itkane/canaux/detail'>
      <div className='btnchoix2'>
        <p className='textbtn'>Al Itkane
        <p style={{fontSize:12,fontWeight:400}}>Detail</p>
        <p style={{fontSize:12,fontWeight:400,marginTop:-15}}>179 
        <FaIcons.FaMale style={{marginTop:-3}}  />
        </p>
        </p>
      </div>
      </Link>
         
          

    <Link to='/organigramme/blekis/canaux/detail'>
      <div className='btnchoix'>    
        <p className='textbtn'>BLEKIS
       <p style={{fontSize:12,fontWeight:400}}>Detail</p>
       <p style={{fontSize:12,fontWeight:400,marginTop:-15}}>138 
        <FaIcons.FaMale style={{marginTop:-3}}  />
        </p>
        </p>
        
      </div>
      </Link>
      
      <Link >
      <div className='btnchoix3'>
        <p className='textbtn'>Gros
        <p style={{fontSize:12,fontWeight:400}}>Blekis et Al Itkane</p>
        <p style={{fontSize:12,fontWeight:400,marginTop:-15}}>47 
        <FaIcons.FaMale style={{marginTop:-3}}  />
        </p>
        </p>
      </div>
      </Link>
      
      
      </div>
    );
  }
  
  export default Acceuil;
  