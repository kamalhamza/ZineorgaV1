import React from 'react'
import '../orga.css'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import OrgChart from '../../mychart'

function BlekisOrganigrammegms() {
  
    return (
      
      
        <div className='bodyorgan' >
          <Link to ='/organigramme/blekis/canaux' className='retour'><AiIcons.AiFillCaretLeft style={{marginTop:5,marginLeft:-1400,marginBottom:10,fontSize:30,backgroundColor:'transparent'}}/>
           </Link>
            <div className='bodyorga'>
         <OrgChart 
        
         nodes={[
            { id: 1, performance: 33, points: 99, name: 'ABDERRAHMAN FAKIR', title: 'Responsable', title2: 'Responsable ', img: 'https://zupimages.net/up/21/19/d6zd.png' },

            { id: 2, performance: 33, pid:1, points: 99, name: 'ABDERRAHMAN FAKIR', title: 'Responsable', title2: 'Responsable regional ', img: 'https://zupimages.net/up/21/19/d6zd.png' },
            { id: 3, performance: 33, pid:1, points: 99, name: 'ABDERRAHMAN FAKIR', title: 'Responsable', title2: 'Responsable regional', img: 'https://zupimages.net/up/21/19/d6zd.png' },

          { id:4, tags:["vendeur"],performance: 33, points: 99, name: 'TAIFI ABDELKRIM', title: ' Vendeur GMS', pid: 2, title2: 'Région SUD', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 5,tags:["vendeur"], performance: 33, points: 99, name: 'OUMOULOUD HAFID', title: 'Vendeur GMS', pid: 2, title2: 'Région Centre', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          { id: 6, tags:["vendeur"],performance: 33, points: 99, name: 'TAIFI ABDELKRIM', title: 'Vendeur GMS ', pid: 3, title2: 'Région Meknes Orient', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 7, tags:["vendeur"],performance: 33, points: 99, name: 'OUMOULOUD HAFID', title: 'Vendeur GMS', pid: 3, title2: 'Région Rabat-Nord', img: 'https://zupimages.net/up/21/19/4fu5.png' },
         ]} /></div>
      </div>
      
    );
  }
  
  export default BlekisOrganigrammegms;