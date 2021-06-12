import React from 'react'
import '../orga.css'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import OrgChart from '../../mychart'

function BlekisOrganigrammegros() {
  
    return (
      
      
        <div className='bodyorgan' >
          <Link to ='/organigramme/blekis/canaux' className='retour'><AiIcons.AiFillCaretLeft style={{marginTop:5,marginLeft:-1400,marginBottom:10,fontSize:30,backgroundColor:'transparent'}}/>
           </Link>
            <div className='bodyorga'>
         <OrgChart 
        
         nodes={[
          { id: 1,tags: ["entity"], title: "[GROS] Zone Sud"},
          { id: 2,tags: ["entity"], title: " [GROS] Zone Nord"},

          { id: 3, performance: 33, points: 99, name: 'ABDERRAHMAN FAKIR', title: 'Responsable', pid: 1, title2: 'Responsable Région', img: 'https://zupimages.net/up/21/19/d6zd.png' },
          { id: 4, performance: 33, points: 99, name: 'IBRAHIM LGSAYER', title: 'Responsable', pid: 2, title2: 'Responsable Région', img: 'https://zupimages.net/up/21/19/d6zd.png' },

          


          { id: 5, performance: 33, points: 99, name: 'SAID MOUTAWAKIL', title: 'Responsable', pid: 3, title2: 'Regional Pole', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 6, performance: 33, points: 99, name: 'BOUCHAIB CHERDOUH', title: 'Responsable', pid: 4, title2: 'Regional Pole', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          { id: 7, performance: 33, points: 99, name: 'ISMAIL SARDI', title: 'Responsable', pid: 5, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 8, performance: 33, points: 99, name: 'ATEF LAHCEN', title: 'Responsable', pid: 5, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 9, performance: 33, points: 99, name: 'IDRIS AIT HSEIN', title: 'Responsable', pid: 5, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 10, performance: 33, points: 99, name: ' TIBARI BAYANE', title: 'Responsable', pid: 5, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 11, performance: 33, points: 99, name: 'SAID KECHACH', title: 'Responsable', pid: 5, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          { id: 12, performance: 33, points: 99, name: 'ISMAIL SARDI', title: 'Responsable', pid: 6, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 13, performance: 33, points: 99, name: 'KHALID KHARTI', title: 'Responsable', pid: 6, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 14, performance: 33, points: 99, name: 'MED ABOULBAZ', title: 'Responsable', pid: 6, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 15, performance: 33, points: 99, name: 'MUSTAPHA MAHIR', title: 'Responsable', pid: 6, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 16, performance: 33, points: 99, name: 'CHEMSEDDINE KARAFI', title: 'Responsable', pid: 6, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 17, performance: 33, points: 99, name: 'ABDELLAH KECHACH', title: 'Responsable', pid: 6, title2: 'Regional Gros', img: 'https://zupimages.net/up/21/19/4fu5.png' },
         
          { id: 18,tags:["vendeur"], performance: 33, points: 99, name: 'EL BAZ MOHAMED ', title: 'Vendeur Gros', pid: 7, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 19,tags:["vendeur"], performance: 33, points: 99, name: 'ISMAIL AMARDOUL', title: 'Vendeur Gros', pid: 7, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 20,tags:["vendeur"], performance: 33, points: 99, name: 'YOUNESS AMAAR(BMZ)', title: 'Vendeur Gros', pid: 7, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          { id: 21, tags:["vendeur"],performance: 33, points: 99, name: 'TAIFI ABDELKRIM', title: 'Vendeur Gros', pid: 8, title2: 'Région El Jadida', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 22,tags:["vendeur"], performance: 33, points: 99, name: 'OUMOULOUD HAFID', title: 'Vendeur Gros', pid: 8, title2: 'Région El Jadida', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          { id: 23, tags:["vendeur"],performance: 33, points: 99, name: 'EL KHAMSSA REDOUANE ', title: 'Vendeur Gros', pid: 9, title2: 'Région Beni Mellal', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 24,tags:["vendeur"], performance: 33, points: 99, name: 'EL FADIL MOHAMMED', title: 'Vendeur Gros', pid: 9, title2: 'Région Beni Mellal', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 25,tags:["vendeur"], performance: 33, points: 99, name: 'EL BIAZ Houcine', title: 'Vendeur Gros', pid: 9, title2: 'Région Beni Mellal', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          { id: 26,tags:["vendeur"], performance: 33, points: 99, name: 'MORABIT ABDELLAH ', title: 'Vendeur Gros', pid: 10, title2: 'Région Marrakech', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 27, tags:["vendeur"],performance: 33, points: 99, name: 'BAYANE YASSINE', title: 'Vendeur Gros', pid: 10, title2: 'Région Marrakech', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 28,tags:["vendeur"], performance: 33, points: 99, name: 'EL KHABOUSS MOHAMED', title: 'Vendeur Gros', pid: 10, title2: 'Région Marrakech', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 29,tags:["vendeur"], performance: 33, points: 99, name: 'TIBARI BAYANE', title: 'Vendeur Gros', pid: 10, title2: 'Région Marrakech', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          { id: 30, tags:["vendeur"],performance: 33, points: 99, name: 'JAMAL CHAKIR ', title: 'Vendeur Gros', pid: 11, title2: 'Région Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 31,tags:["vendeur"], performance: 33, points: 99, name: 'BAYAN ISMAIL', title: 'Vendeur Gros', pid: 11, title2: 'Région Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 32,tags:["vendeur"], performance: 33, points: 99, name: 'HICHAM BOUAALI', title: 'Vendeur Gros', pid: 11, title2: 'Région Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 33, tags:["vendeur"],performance: 33, points: 99, name: 'AZIZ RAZZOUK', title: 'Vendeur Gros', pid: 11, title2: 'Région Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },



          { id: 34, tags:["vendeur"],performance: 33, points: 99, name: 'EL AZIZI SAID ', title: 'Vendeur Gros', pid: 12, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 35, tags:["vendeur"],performance: 33, points: 99, name: 'MOUHIM MUSTAPHA (BMZ)', title: 'Vendeur Gros', pid: 12, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 36,tags:["vendeur"], performance: 33, points: 99, name: 'CHARQUI HASSAN', title: 'Vendeur Gros', pid: 12, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          
          
          { id: 37, tags:["vendeur"],performance: 33, points: 99, name: 'RACHID ABDELWAHED', title: 'Vendeur Gros', pid: 13, title2: 'Région Salé', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 38, tags:["vendeur"],performance: 33, points: 99, name: 'BRAHIM EL OUANASSI (BMZ)', title: 'Vendeur Gros', pid: 13, title2: 'Région Salé', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 39, tags:["vendeur"],performance: 33, points: 99, name: 'BAKARA MOHAMED', title: 'Vendeur Gros', pid: 13, title2: 'Région Salé', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          { id: 40,tags:["vendeur"], performance: 33, points: 99, name: 'YOUNESS WAADERHIM', title: 'Vendeur Gros', pid: 14, title2: 'Région Fes', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 41,tags:["vendeur"], performance: 33, points: 99, name: 'BELHAJ LAHCEN', title: 'Vendeur Gros', pid: 14, title2: 'Région Fes', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 42, tags:["vendeur"],performance: 33, points: 99, name: 'KALAA ABDELILAH', title: 'Vendeur Gros', pid: 14, title2: 'Région Fes', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          { id: 43, tags:["vendeur"],performance: 33, points: 99, name: 'ECH-CHETOUANI FOUAD', title: 'Vendeur Gros', pid: 15, title2: 'Région Oujda', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 44, tags:["vendeur"],performance: 33, points: 99, name: 'JAMAL DAOUDI', title: 'Vendeur Gros', pid: 15, title2: 'Région Oujda', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          { id: 45,tags:["vendeur"], performance: 33, points: 99, name: 'LHOUSSAINE SALH', title: 'Vendeur Gros', pid: 16, title2: 'Région NADOR', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 46,tags:["vendeur"], performance: 33, points: 99, name: 'BOUAZZAOUI  JAWAD', title: 'Vendeur Gros', pid: 16, title2: 'Région NADOR', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          { id: 47,tags:["vendeur"], performance: 33, points: 99, name: 'ABDERRAHMAN RAF', title: 'Vendeur Gros', pid: 17, title2: 'Région Tanger', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 48,tags:["vendeur"], performance: 33, points: 99, name: 'EL AMRANI MOHAMMED', title: 'Vendeur Gros', pid: 17, title2: 'Région Tanger', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 49,tags:["vendeur"], performance: 33, points: 99, name: 'REDOUANE AITSI', title: 'Vendeur Gros', pid: 17, title2: 'Région Tinghir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          

         
          
         ]} /></div>
      </div>
      
    );
  }
  
  export default BlekisOrganigrammegros;