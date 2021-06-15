import React from 'react'
import '../orga.css'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import OrgChart from '../../mychart'

function BlekisOrganigrammegros() {
  
    return (
      
      
        <div className='bodyorgan' >
          <Link to ='/home' className='retour'><AiIcons.AiFillCaretLeft style={{marginTop:5,marginLeft:-1400,marginBottom:10,fontSize:30,backgroundColor:'transparent'}}/>
           </Link>
            <div className='bodyorga'>
         <OrgChart 
        
         nodes={[
          { id: 1, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: '',pid: 0, name: 'BOUCHAIB NAJI',Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', title: 'Directeur',  title2: 'Directeur Nationale des ventes', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 2,tags: ["entity"],pid: 1, title: " [GROS] Zone Sud"},
          { id: 3,tags: ["entity"],pid: 1, title: "[GROS] Zone Nord"},
          { id: 4,tags: ["entity"], pid: 1,title: "[GROS] Atlantique"},

          { id: 5, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: '', name: 'ABDERRAHMAN FAKIR',Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', title: 'Responsable', pid: 2, title2: 'Responsable Région', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061831752040.jpg' },
          { id: 6, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: '', name: 'IBRAHIM LGSAYER', title: 'Responsable', pid: 3, title2: 'Responsable Région', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id:7, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: '', name: '', title: 'Régionale', pid: 4, title2: 'Regional Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          //**Regionaux Sud */
          { id: 8, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 2, name: 'Amine Abir', title: 'Régionale', pid: 5,tags:['vendeur'], title2: 'Régionale Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315653270.jpg' },
          { id: 9, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 3, name: 'Driss AIT HSSAIN', title: 'Régionale', pid: 5,tags:['vendeur'], title2: 'Régionale Beni Mellal', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 10, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 1, name: '', title: '', pid: 5, tags:['vendeur'],img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 11, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 4, name: 'Said Kachache ', tags:['vendeur'],title: 'Régionale', pid: 5, title2: 'Régionale Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 12, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 3, name: 'Lahcen Atif', title: 'Régionale', pid: 5,tags:['vendeur'], title2: 'Régionale El Jedida', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          //Regionaux Nord
          { id: 13, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 3, name: 'ABDELLAH KECHACH', title: 'Régionale', pid: 6,tags:['vendeur'], title2: 'Régionale Tanger', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 14, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 4, name: 'Khalid Kharti', title: 'Régionale', pid: 6, tags:['vendeur'],title2: 'Régionale Salé', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 15, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 2, name: 'Mustapha Maher', title: 'Régionale', pid: 6, tags:['vendeur'],title2: 'Régionale oujda', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 16, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 2, name: 'Chamesddine karafi', title: 'Régionale', pid: 6, tags:['vendeur'],title2: 'Régionale Nador', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 17, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 3, name: 'Boulbaz Mohamed', title: 'Régionale', pid: 6,tags:['vendeur'], title2: 'Régionale Fes/Meknes', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          //Regionaux Atlantique
          { id: 18, performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 9, name: 'iSMAIL SERDI', title: 'Régionale', pid: 7,tags:['vendeur'], title2: 'Régionale Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091945689034.jpg' },
          // Agence Sud
          { id: 19,tags: ["entity"], title: "Agence Marrakech",pid :8},
          { id: 20,tags: ["entity"], title: "Agence Beni Mellal",pid :9},
          { id: 21,tags: ["entity"], title: "Agence Tinghir",pid :10},
          { id: 22,tags: ["entity"], title: "Agence Agadir",pid :11},
          { id: 23,tags: ["entity"], title: "Agence El jadida",pid :12},
          // Agence Nord
          { id: 24,tags: ["entity"], title: "Agence Tanger",pid :13},
          { id: 25,tags: ["entity"], title: "Agence Salé",pid :14},
          { id: 26,tags: ["entity"], title: "Agence Oujda",pid :15},
          { id: 27,tags: ["entity"], title: "Agence Nador",pid :16},
          { id: 28,tags: ["entity"], title: "Agence Fes et Meknes",pid :17},
          // Agence Casablanca
          { id: 29,tags: ["entity"], title: "Casablanca",pid :18},


          { id: 30,tags:["vendeur"], performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 0, name: 'MORABIT ABDELLAH ', title: 'Vendeur Gros', pid: 19, title2: 'Région Marrakech', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092812630477.jpg' },
          { id: 31, tags:["vendeur"],performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 0, name: 'BAYANE YASSINE', title: 'Vendeur Gros', pid: 19, title2: 'Région Marrakech', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092812371783.jpg' },
          

          { id: 32, tags:["vendeur"],performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'EL KHAMSSA REDOUANE ', title: 'Vendeur Gros', pid: 20, title2: 'Région Beni Mellal', img: 'https://nsa40.casimages.com/img/2021/06/14/21061409171984622.jpg' },
          { id: 33,tags:["vendeur"], performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'EL FADIL MOHAMMED', title: 'Vendeur Gros', pid: 20, title2: 'Région Beni Mellal', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091719518315.jpg' },
          { id: 34,tags:["vendeur"], performance: '', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'EL BIAZ Houcine', title: 'Vendeur Gros', pid: 20, title2: 'Région Beni Mellal', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091719256053.jpg' },

          { id: 35,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'Ait Si Redouane', title: 'Vendeur Gros', pid: 21, title2: 'Région Tinghir', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092812882968.jpg' },


          { id: 36, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'JAMAL CHAKIR ', title: 'Vendeur Gros', pid: 22, title2: 'Région Agadir', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091508562279.jpg' },
          { id: 37,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'BAYAN ISMAIL', title: 'Vendeur Gros', pid: 22, title2: 'Région Agadir', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091508308628.jpg' },
          { id: 38,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'HICHAM BOUAALI', title: 'Vendeur Gros', pid: 22, title2: 'Région Agadir', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091507874964.jpg' },
          { id: 39, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'AZIZ RAZZOUK', title: 'Vendeur Gros', pid: 22, title2: 'Région Agadir', img: 'https://nsa40.casimages.com/img/2021/06/14/21061409150849100.jpg' },


          { id: 40, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'Fettouhi Bouchaib', title: 'Vendeur Gros', pid: 23, title2: 'Région El Jadida', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092334742897.jpg' },
          { id: 41,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'OUMOULOUD HAFID', title: 'Vendeur Gros', pid: 23, title2: 'Région El Jadida', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092334573158.jpg' },
          { id: 42, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'TAIFI ABDELKRIM', title: 'Vendeur Gros', pid: 23, title2: 'Région El Jadida', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092335114636.jpg' },
      

          { id: 43,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'ABDERRAHMAN RAF', title: 'Vendeur Gros', pid: 24, title2: 'Région Tanger', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093238227196.jpg' },
          { id: 44,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'EL AMRANI MOHAMMED', title: 'Vendeur Gros', pid: 24, title2: 'Région Tanger', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093238389715.jpg' },
          { id: 45,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'CHOUAIB HIRCHI', title: 'Vendeur Gros BMZ', pid: 24, title2: 'Région Tanger', img: 'https://zupimages.net/up/21/19/4fu5.png' },


          { id: 46, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'RACHID ABDELWAHED', title: 'Vendeur Gros', pid: 25, title2: 'Région Salé', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093118591069.jpg' },
          { id: 47, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'BRAHIM EL OUANASSI (BMZ)', title: 'Vendeur Gros', pid: 25, title2: 'Région Salé', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093119100696.jpg' },
          { id: 48, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'BAKARA MOHAMED', title: 'Vendeur Gros', pid: 25, title2: 'Région Salé', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093118847904.jpg' },
          { id: 49, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points:0, name: 'Hamzaoui Mustapha', title: 'Vendeur Gros', pid: 25, title2: 'Région Salé', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093118413059.jpg' },



          { id: 50, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'ECH-CHETOUANI FOUAD', title: 'Vendeur Gros', pid: 26, title2: 'Région Oujda', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 51, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'JAMAL BOUAZZAOUI', title: 'Vendeur Gros', pid: 26, title2: 'Région Oujda', img: 'https://zupimages.net/up/21/19/4fu5.png' },
         

          { id: 52,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'LHOUSSAINE SALH', title: 'Vendeur Gros', pid: 27, title2: 'Région NADOR', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093004495367.jpg' },
          { id: 53,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'JAMAL EDDAOUDI', title: 'Vendeur Gros', pid: 27, title2: 'Région NADOR', img: 'https://nsa40.casimages.com/img/2021/06/14/210614093004123466.jpg' },


          { id: 54,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'YOUNESS WAADERHIM', title: 'Vendeur Gros', pid: 28, title2: 'Région Fes', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092628585496.jpg' },
          { id: 55,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'BELHAJ LAHCEN', title: 'Vendeur Gros', pid: 28, title2: 'Région Fes', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092629144836.jpg' },
          { id: 56, tags:["vendeur"],performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'KALAA ABDELILAH', title: 'Vendeur Gros', pid: 28, title2: 'Région Fes', img: 'https://nsa40.casimages.com/img/2021/06/14/210614092629396783.jpg' },


          { id: 57,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'El Azizi Said ', title: 'Vendeur Gros pates & couscous', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091944926832.jpg' },
          { id: 58,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'Makhoud med', title: 'Vendeur Gros farine & semoule', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091946203421.jpg' },
          { id: 59,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'Ahmar Noureddine', title: 'Vendeur Gros farine & semoule', pid: 29, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 60,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'EL BAZ MOHAMED ', title: 'Vendeur Gros farine & semoule', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091945438919.jpg' },
          { id: 61,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'Ammar younes', title: 'Vendeur Gros Blekis', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091944382329.jpg' },
          { id: 62,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'Mohim med', title: 'Vendeur Gros Blekis', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091944129398.jpg' },
          { id: 63,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'EL BAZ Abdelkarim ', title: 'Vendeur Gros pate & couscous', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091945186457.jpg' },
          { id: 64,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'ISMAIL AMARDOUL', title: 'Vendeur Gros pate & couscous', pid: 29, title2: 'Région Casablanca', img: 'https://nsa40.casimages.com/img/2021/06/14/210614091944715669.jpg' },
          { id: 65,tags:["vendeur"], performance:'', Realisation: '',Qaulitatif:'',Impayé:'',Encaissement:'', points: 99, name: 'Charqui Hassan', title: 'Vendeur Gros', pid: 29, title2: 'Région Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },







         

          
         ]} /></div>
      </div>
      
    );
  }
  
  export default BlekisOrganigrammegros;