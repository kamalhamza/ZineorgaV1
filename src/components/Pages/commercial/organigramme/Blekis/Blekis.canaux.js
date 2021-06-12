import React from 'react'
import '../orga.css'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
function BlekisCanaux() {
    return (
        <div className='body' >
          <div>
            <Link to ='../../home' className='retour'><Row style={{marginLeft:2,marginTop:-15}}><AiIcons.AiFillCaretLeft style={{marginTop:5}}/>
            <p>Retour</p></Row></Link>
            </div>
    <Link to='/organigramme/blekis/canaux/detail'>
      <div className='btnchoix'>    
        <p className='textbtn'>Detail</p>
      </div>
      </Link>
      <Link to='/organigramme/blekis/canaux/gros'>
      <div className='btnchoix2'>
        <p className='textbtn'>Gros</p>
      </div>
      </Link>
      <Link to='/organigramme/blekis/canaux/gms'>
      <div className='btnchoix3'>
        <p className='textbtn'>GMS</p>
      </div>
      </Link>
      <Link to='/organigrame/AlItkane'>
      <div className='btnchoix4'>
        <p className='textbtn'>CHR</p>
      </div>
      </Link>
      </div>
    );
  }
  
  export default BlekisCanaux;
  