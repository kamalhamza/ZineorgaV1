import React from 'react'
import '../orga.css'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import OrgChart from '../../mychart'

function ItkaneOrganigramme() {
  
    return (
      
      
        <div className='bodyorgan' >
          <Link to ='/home' className='retour'><AiIcons.AiFillCaretLeft style={{marginTop:5,marginLeft:-1400,marginBottom:10,fontSize:30,backgroundColor:'transparent'}}/>
           </Link>
            <div className='bodyorga'>
         <OrgChart 
        
         nodes={[
          { id: 1, performance: '', points: '',pid: 0, name: 'BOUCHAIB NAJI',Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', title: 'Directeur',  title2: 'Directeur Nationale des ventes', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 2,tags: ["entity"],pid: 1, title: " [Al Itkane] Zone Sud"},
          { id: 3,tags: ["entity"],pid: 1, title: "[Al Itkane] Zone Nord"},
          { id: 4,tags: ["entity"], pid: 1,title: "[Al Itkane] Atlantique"},

          { id: 5, performance: '', points: '', name: 'ABDERRAHMAN FAKIR',Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', title: 'Responsable', pid: 2, title2: 'Responsable Région', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061831752040.jpg' },
          { id: 6, performance: '', points: '', name: 'IBRAHIM LGSAYER', title: 'Responsable', pid: 3, title2: 'Responsable Région', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061831962300.jpg' },
          { id:7, performance: '', points: '', name: '', title: 'Régionale', pid: 4, title2: 'Regional Casablanca', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          //**Regionaux Sud */
          { id: 8, performance: '64%', points: 26, name: 'Amine Abir', title: 'Régionale', pid: 5,tags:['vendeur'], title2: 'Régionale Marrakech/Beni Mellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315653270.jpg' },
          { id: 9, performance: '', points: 5, name: '', title: '', pid: 5, tags:['vendeur'],img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 10, performance: '68.5%', points: 13, name: 'LHOUCINE EL FAKIR ', tags:['vendeur'],title: 'Régionale', pid: 5, title2: 'Régionale Agadir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010316433731.jpg' },
          { id: 11, performance: '', points: '', name: '', title: 'Régionale', pid: 5,tags:['vendeur'], title2: '', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          //Regionaux Nord
          { id: 12, performance: '53.4%', points: 15, name: 'Youssef Jouichat', title: 'Régionale', pid: 6,tags:['rouge'], title2: 'Régionale Tanger', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315394789.jpg' },
          { id: 13, performance: '', points: 15, name: 'Khalid Kharti', title: 'Régionale', pid: 6, tags:['vendeur'],title2: 'Régionale Salé', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010314961805.jpg' },
          { id: 14, performance: '53.25', points: 9, name: 'Mustapha Maher', title: 'Régionale', pid: 6, tags:['rouge'],title2: 'Régionale oujda', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315114181.jpg' },
          { id: 15, performance: '', points: 5, name: 'Chamesddine karafi', title: 'Régionale', pid: 6, tags:['vendeur'],title2: 'Régionale Nador', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010314707809.jpg' },
          { id: 16, performance: '51.3%', points: 17, name: 'Boulbaz Mohamed', title: 'Régionale', pid: 6,tags:['rouge'], title2: 'Régionale Fes/Meknes', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315933886.jpg' },


          //Regionaux Atlantique
          { id: 17, performance: '51%', points: 17, name: 'Ahmed Habboubi', title: 'Régionale', pid: 7,tags:['rouge'], title2: 'Régionale Casablanca', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010316168319.jpg' },
          // Agence Sud
          { id: 18,tags: ["entity"], title: "Agence Marrakech",pid :8},
          { id: 19,tags: ["entity"], title: "Agence Beni Mellal",pid :8},
          { id: 20,tags: ["entity"], title: "Agence Tinghir",pid :9},
          { id: 21,tags: ["entity"], title: "Agence Agadir",pid :10},
          { id: 22,tags: ["entity"], title: "Agence El jadida",pid :11},
          // Agence Nord
          { id: 24,tags: ["entity"], title: "Agence Tanger",pid :12},
          { id: 25,tags: ["entity"], title: "Agence Salé",pid :13},
          { id: 26,tags: ["entity"], title: "Agence Oujda",pid :14},
          { id: 27,tags: ["entity"], title: "Agence Nador",pid :15},
          { id: 28,tags: ["entity"], title: "Agence Fes et Meknes",pid :16},
          // Agence Casablanca
          { id: 29,tags: ["entity"], title: "Casablanca",pid :17},

           //Superviseur Agence Marrakech
           { id: 30, performance: '68%', points: 5, name: 'Youssef Ibno Joubair', title: 'Superviseur',tags:['vendeur'], pid: 18, title2: 'Superviseur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124051153313.jpg' },
           { id: 31, performance: '73%', points: 6, name: 'Bellari Med', title: 'Superviseur', pid: 18,tags:['vendeur'], title2: 'Superviseur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124048582601.jpg' },

            //Superviseur Agence BeniMellal
          { id: 32, performance: '63.4%', points: 5, name: 'Anour El Maazaz', title: 'Superviseur', pid: 19, tags:['vendeur'],title2: 'Superviseur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124045691852.jpg' },
          { id: 33, performance: '56%', points: 6, name: 'Assedam Med', title: 'Superviseur', pid: 19, tags:['rouge'],title2: 'Superviseur BeniMellal', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          //Superviseur Agence Tinghir
          { id: 34, performance: '60%', points: 5, name: 'Brahim Amghar', title: 'Superviseur', pid: 20,tags:['vendeur'], title2: 'Superviseur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124045963281.jpg' },


          //Superviseur Agence Agadir
          { id: 35, performance: '66%', points: 9, name: 'Hittous Mohamed', title: 'Superviseur', pid: 21, tags:['vendeur'],title2: 'Superviseur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124046790279.jpg' },
          { id: 36, performance: '71%', points: 2, name: 'EL AIMAR MOURAD', title: 'Superviseur', pid: 21,tags:['vendeur'], title2: 'Superviseur Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },

          //Superviseur Agence El JADIDA
          { id: 37, performance: '43%', points: 6, name: 'Hamza Maataoui', title: 'Superviseur', pid: 22,tags:['rouge'], title2: 'Superviseur El JADIDA', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124046350467.jpg' },
           //Superviseur Agence Tanger
          { id: 39, performance: '63,2%', points: 5, name: 'Lotfi Reguragi', title: 'Superviseur', pid: 24,tags:['rouge'], title2: 'Superviseur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/30/21053012404875325.jpg' },
          { id: 40, performance: '46.8%', points: 5, name: 'Karim Taqi', title: 'Superviseur', pid: 24, tags:['rouge'],title2: 'Superviseur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124047817073.jpg' },
          { id: 41, performance: '50.2%', points: 5, name: 'Salah Zougar', title: 'Superviseur', pid: 24, tags:['rouge'],title2: 'Superviseur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124050900923.jpg' },
          //Superviseur Agence Salé
          { id: 42, performance: '', points: 6, name: 'Ezzimy Abdeljalil', title: 'Superviseur', pid: 25, tags:['rouge'],title2: 'Superviseur Salé', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124046528517.jpg' },
          { id: 43, performance: '47.3', points: 4, name: 'Sadik Annahal', title: 'Superviseur', pid: 25,tags:['rouge'], title2: 'Superviseur Salé', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124050642669.jpg' },
          { id: 44, performance: '38.4%', points: 5, name: 'Maimi Mahjoub', title: 'Superviseur', pid: 25, tags:['rouge'],title2: 'Superviseur Salé', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124048326210.jpg' },
          //Superviseur Agence Oujda
          { id: 45, performance: '53.25%', points: 9, name: 'AbdelFetah Cherifi', title: 'Superviseur', pid: 26,tags:['vendeur'], title2: 'Superviseur Oujda', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124045443536.jpg' },
          //Superviseur Agence Nador
          { id: 46, performance: '', points: 5, name: 'Taoufik Kaddouri', title: 'Superviseur', pid: 27,tags:['rouge'], title2: 'Superviseur Nador', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124047303293.jpg' },
          //Superviseur Agence Fes Meknes
          { id: 47, performance: '46%', points: 6, name: 'Aziz Meliani', title: 'Superviseur', pid: 28,tags:['rouge'], title2: 'Superviseur Fes', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124049346048.jpg' },
          { id: 48, performance: '58%', points: 5, name: 'Tazi Cherti', title: 'Superviseur', pid: 28,tags:['vendeur'], title2: 'Superviseur Fes', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 49, performance: '50%', points: 6, name: 'Karbich Khalid', title: 'Superviseur', pid: 28, tags:['rouge'],title2: 'Superviseur Meknes', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124047561522.jpg' },

          //Superviseur Agence Casablanca sud
          { id: 50, performance: '51.3%', points: '0', name: 'NOUAFAL MOQTATIF', title: 'Superviseur',tags:['rouge'], pid: 29, title2: 'Superviseur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/21060706144176734.jpg' },
          //Superviseur Casablanca NORD
          { id: 51, performance: '42.8%', points: 99, name: 'Mohammed', title: 'Superviseur', pid: 29,tags:['rouge'], title2: 'Superviseur Casablanca EXT', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061440567808.jpg' },
          //Superviseur EXT
          { id: 52, performance: '60%', points: 99, name: 'Mehdi Gharib', title: 'Superviseur', pid: 29,tags:['vendeur'], title2: 'Superviseur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061440796654.jpg' },

          //*******VENDEUR*********VENDEUR***********VENDEUR***************VENDEUR************VENDEUR*******VENDEUR*****VENDEUR****VENDEUR***************VENDEUR****************************************************************************************** */
          //Vendeur Marrakech
          //---Sup1
          { id:151, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'0', name: 'Abdelah Sabri', title: 'Vendeur',tags:['vendeur'], pid: 30, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074447757437.jpg' },
          { id: 152, performance: '83%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0.5', name: 'Demane Ibrahim', title: 'Vendeur',tags:['vendeur'], pid: 30, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074449532474.jpg' },
          { id: 53, performance: '58%', points: 0,Realisation:'0.5',Qaulitatif:'2',Encaissement:'1',Impayé:'0', name: 'Benhadya Yassine', title: 'Vendeur',tags:['vendeur'], pid: 30, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074448271288.jpg' },
          { id: 54, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'1',Encaissement:'1',Impayé:'1', name: 'BenHamza Yassir', title: 'Vendeur',tags:['vendeur'], pid: 30, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074448524733.jpg' },

          //--Sup2
          { id: 55, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'0', name: 'Aziz Khayati', title: 'Vendeur',tags:['vendeur'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074449283991.jpg' },
          { id: 56, performance: '83%', points: 0,Realisation:'1',Qaulitatif:'2',Encaissement:'1',Impayé:'1', name: 'El Khabouss', title: 'Vendeur',tags:['vert'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074449788792.jpg' },
          { id: 57, performance: '83%', points: 0,Realisation:'0.5',Qaulitatif:'1.5',Encaissement:'1',Impayé:'1', name: 'Tilimaz Aatef', title: 'Vendeur',tags:['vert'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074448779340.jpg' },
          { id: 155, performance: '75%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0.5', name: 'Maakak Ayoub', title: 'Vendeur',tags:['vendeur'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/21053007444939934.jpg' },
          { id: 156, performance: '58%', points: 0,Realisation:'0.5',Qaulitatif:'2',Encaissement:'1',Impayé:'0', name: 'Gourir Abdeltif', title: 'Vendeur',tags:['vendeur'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074447637814.jpg' },
          { id: 157, performance: '75%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'1', name: 'Essamlali Abderazak', title: 'Vendeur',tags:['vendeur'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://nsa40.casimages.com/img/2021/05/30/21053007444819248.jpg' },

          //Vendeur BeniMellal
          //-Sup1
          { id: 58, performance: '50%', points: 0,Realisation:'0.5',Qaulitatif:'2',Encaissement:'0.5',Impayé:'0', name: 'Khalaf Yassine', title: 'Vendeur',tags:['rouge'], pid: 32, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/21053007474387778.jpg' },
          { id: 59, performance: '67%', points: 0,Realisation:'0.5',Qaulitatif:'2',Encaissement:'1',Impayé:'0.5', name: 'BEN SAID MOHAMMED', title: 'Vendeur',tags:['vendeur'], pid: 32, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074741884837.jpg' },
          { id: 60, performance: '67%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'0.5', name: 'El Youssfi ABDELKADER', title: 'Vendeur',tags:['vendeur'], pid: 32, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074743921261.jpg' },
          { id: 160, performance: '58%', points: 0,Realisation:'0',Qaulitatif:'1.5',Encaissement:'1',Impayé:'1', name: 'BOUTALEB AYOUB', title: 'Vendeur',tags:['vendeur'], pid: 32, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074744428736.jpg' },
          { id: 161, performance: '75%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0.5', name: 'EL MAMMERY ANOUAR', title: 'Vendeur',tags:['vendeur'], pid: 32, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074744171120.jpg' },
          //-Sup2
          { id: 61, performance: '67%', points: 0,Realisation:'0',Qaulitatif:'2',Encaissement:'1',Impayé:'1', name: 'ID OUAZIZ RACHID', title: 'Vendeur',tags:['vendeur'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074742832840.jpg' },
          { id: 62, performance: '50%', points: 0,Realisation:'0',Qaulitatif:'1.5',Encaissement:'1',Impayé:'0.5', name: 'BOUZEKRI ATTOU', title: 'Vendeur',tags:['rouge'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074743362224.jpg' },
          { id: 63, performance: '33%', points: 0,Realisation:'0',Qaulitatif:'1.5',Encaissement:'0.5',Impayé:'0', name: 'BOULOUZ HASSAN', title: 'Vendeur',tags:['rouge'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074742579667.jpg' },
          { id: 162, performance: '58%', points: 0,Realisation:'0',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0', name: 'BELLOUZA ABDELHADI', title: 'Vendeur',tags:['vendeur'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/21053007474245750.jpg' },
          { id: 163, performance: '75%', points: 0,Realisation:'0',Qaulitatif:'2.5',Encaissement:'1',Impayé:'1', name: 'BEZAID MED', title: 'Vendeur',tags:['vendeur'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530074744688468.jpg' },
          { id: 164, performance: '58%', points: 0,Realisation:'0',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0', name: 'BOUTALEB MOHAMED', title: 'Vendeur',tags:['vendeur'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/21/p2pb.jpg' },


          //Vendeur Tinghir
          //-sup1
          { id: 64, performance: '75%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'IMIDER BELKACEM', title: 'Vendeur',tags:['vendeur'], pid: 34, title2: 'Vendeur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530083546694115.jpg' },
          { id: 165, performance: '33%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'HAMDI MY LAARBI', title: 'Vendeur',tags:['rouge'], pid: 34, title2: 'Vendeur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/21053008354612633.jpg' },
          { id: 166, performance: '67%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'OULASRI ABDLALI', title: 'Vendeur',tags:['vendeur'], pid: 34, title2: 'Vendeur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530083542788557.jpg' },
          { id: 167, performance: '58%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'RIDOUANE OUZIDANE', title: 'Vendeur',tags:['rouge'], pid: 34, title2: 'Vendeur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530083545746052.jpg' },
          { id: 168, performance: '67%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'AIT BAHA YASSINE', title: 'Vendeur',tags:['vendeur'], pid: 34, title2: 'Vendeur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530083546330292.jpg' },
          
          //*ICI**
          //Vendeur Agadir
          //-sup1
          { id: 65, performance: '58%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'0',Impayé:'0', name: 'CHNAITI SAID', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/2105310406518158.jpg' },
          { id: 201, performance: '83%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'1',Impayé:'1', name: 'NAIT BBA SAID', title: 'Vendeur',tags:['vert'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040651262535.png' },
          { id: 202, performance: '75%', points: 0,Realisation:'0.5',Qaulitatif:'2',Encaissement:'1',Impayé:'1', name: 'ER-RAJY MOHMED', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040649712446.png' },
          { id: 203, performance: '50%', points: 0,Realisation:'1',Qaulitatif:'1',Encaissement:'0',Impayé:'1', name: 'LAHCEN BAHSINE', title: 'Vendeur',tags:['rouge'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040650321640.jpg' },
          { id: 204, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'0', name: 'ABDELMOUNIM MARGHADI', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040651536094.png' },
          { id: 205, performance: '58%', points: 0,Realisation:'0.5',Qaulitatif:'1.5',Encaissement:'0.5',Impayé:'1', name: 'ARJAOUI EL KHADIR', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040649462556.jpg' },
          { id: 208, performance: '67%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'0.5', name: 'AIT LBACHE ABDELLATIF', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/21053104065282061.png' },
          { id: 209, performance: '75%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0.5', name: 'FAROUK DAKOUK', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040649975685.jpg' },
          { id: 2359, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'2',Encaissement:'0',Impayé:'1', name: 'AHMED ARJAOUI', title: 'Vendeur',tags:['vendeur'], pid: 35, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040649173042.jpg' },
          
          //-sup2
          { id: 940, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'0.5',Impayé:'0', name: 'IDDER JAAFARI', title: 'Vendeur',tags:['vendeur'], pid: 36, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040650482389.png' },
          { id: 941, performance: '75%', points: 0,Realisation:'1',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0', name: 'ADIL AMERROUY', title: 'Vendeur',tags:['vendeur'], pid: 36, title2: 'Vendeur Agadir', img: 'https://nsa40.casimages.com/img/2021/05/31/210531040651811491.png' },
          //Vendeur El jadida
          //-sup1
          { id: 66, performance: '25%', points: 0,Realisation:'0.5',Qaulitatif:'0.5',Encaissement:'0.5',Impayé:'0', name: 'ELKAMMI ABDERAHMANE', title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041049914993.png' },
          { id: 67 ,performance: '50%', points: 0,Realisation:'1',Qaulitatif:'1',Encaissement:'1',Impayé:'0', name: 'KASSAM AZIZ', title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041049276628.png' },
          { id: 68, performance: '58%', points: 0,Realisation:'1',Qaulitatif:'1.5',Encaissement:'1',Impayé:'0', name: 'REDDAD MAISSOUNI', title: 'Vendeur',tags:['vendeur'], pid: 37, title2: 'Vendeur El jadida', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041049642481.png' },
          { id: 69, performance: '42%', points: 0,Realisation:'0',Qaulitatif:'0.5',Encaissement:'1',Impayé:'1', name: 'ABID AHMED', title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041050189522.png' },
          { id: 70, performance: '25%', points: 0,Realisation:'0.5',Qaulitatif:'1',Encaissement:'0',Impayé:'0', name: 'EL GHLIMI KASIBA', title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041049393274.png' },
          { id: 71, performance: '58%', points: 0,Realisation:'0',Qaulitatif:'1.5',Encaissement:'1',Impayé:'1', name: 'DACHRAOUI AZIZ', title: 'Vendeur',tags:['vendeur'], pid: 37, title2: 'Vendeur El jadida', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041050451372.png' },
         
          //Vendeur Tanger
          //--Sup1
          { id: 82, performance: '67%', points: 0,Realisation:'0.5',Qaulitatif:'1.5',Encaissement:'0.5',Impayé:'0', name: 'Abderrahim FARTOUTI', title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041252280370.jpg' },
          { id: 83, performance: '58%', points: 0,Realisation:'0.5',Qaulitatif:'1.5',Encaissement:'0.5',Impayé:'0', name: 'Lahcen MOUSTACH', title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/21053104125411078.jpg' },
          { id: 84, performance: '58%', points: 0,Realisation:'0.5',Qaulitatif:'2',Encaissement:'0',Impayé:'0', name: 'KORCHI ABDELJABAR', title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/21053104125311155.jpg' },
          { id: 85, performance: '50%', points: 0, Realisation:'0',Qaulitatif:'1.5',Encaissement:'1',Impayé:'0',name: 'Abdechafi EL ASRI', title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041251769362.jpg' },
          { id: 86, performance: '83', points: 0, Realisation:'0',Qaulitatif:'1.5',Encaissement:'1',Impayé:'1',name: 'AHADDOUCHE IBRAHIM', title: 'Vendeur',tags:['vendeur'], pid: 39, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041251211097.jpg' },
          //--Sup2
          { id: 1182, performance: '58%', points: 0,Realisation:'1',Qaulitatif:'2',Encaissement:'0.5',Impayé:'0', name: 'Elhoucein LKALAI', title: 'Vendeur',tags:['vendeur'], pid: 40, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041253242545.jpg' },
          { id: 1183, performance: '50%', points: 0,Realisation:'0',Qaulitatif:'1',Encaissement:'1',Impayé:'1', name: 'Charaf Aariouch', title: 'Vendeur',tags:['rouge'], pid: 40, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041251542926.jpg' },
          { id: 1184, performance: '42%', points: 0,Realisation:'0.5',Qaulitatif:'1',Encaissement:'0',Impayé:'0', name: 'EL MECHRAFI OUSSAMA', title: 'Vendeur',tags:['rouge'], pid: 40, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041254262603.jpg ' },
          { id:1185, performance: '42%', points: 0,Realisation:'0.5',Qaulitatif:'2.5',Encaissement:'1',Impayé:'0', name: 'IILYAS ELJARDINI', title: 'Vendeur',tags:['rouge'], pid: 40, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041252786030.jpg' },
          { id: 1186, performance: '42%', points: 0, Realisation:'0.5',Qaulitatif:'2',Encaissement:'0',Impayé:'0',name: 'Lahcen LAKLAI', title: 'Vendeur',tags:['rouge'], pid: 40, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041253504108.jpg' },
          
          //--Sup3
          { id: 2282, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'EL ASMAR MED', title: 'Vendeur',tags:['vendeur'], pid: 41, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041253760716.jpg' },
          { id: 2283, performance: '25%', points: 0,Realisation:'0',Qaulitatif:'2',Encaissement:'1',Impayé:'1', name: 'SAHOUAN LAHCEN', title: 'Vendeur',tags:['rouge'], pid: 41, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/21053104125122077.jpg' },
          { id: 2284, performance: '67%', points: 0,Realisation:'1',Qaulitatif:'2',Encaissement:'1',Impayé:'0', name: 'Khalid ELGHARRAFI', title: 'Vendeur',tags:['vendeur'], pid: 41, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/21053104125222403.jpg' },
          { id: 2285, performance: '67%', points: 0,Realisation:'0',Qaulitatif:'2',Encaissement:'1',Impayé:'1', name: 'HARROUCH SAID	', title: 'Vendeur',tags:['vendeur'], pid: 41, title2: 'Vendeur Tanger', img: 'https://nsa40.casimages.com/img/2021/05/31/210531041252532560.jpg' },
          { id: 2286, performance: '42%', points: 0,Realisation:'0',Qaulitatif:'1',Encaissement:'1',Impayé:'1', name: 'BOUNAIJA HAAD', title: 'Vendeur',tags:['rouge'], pid: 41, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/j0vn.jpg' },
          //Vendeur Salé
          //--Sup1
          { id: 90, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'BAKHTI MUSTAPHA ', title: 'Vendeur',tags:['vendeur'], pid: 42, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075401736941.jpg' },
          { id: 91, performance: '%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'ZERYOUH LAKHDAR', title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075358148473.jpg' },
          { id: 92, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'BOURIQUI  SOUFIANE', title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075400963083.jpg' },
          { id: 93, performance: '%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'ANAS NKHIKHSI', title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075358873440.jpg' },
          { id: 1293, performance: '%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: ' Abdellah MOUATASIM', title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075401496313.jpg' },
          { id: 1273, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: ' Mohamed MESIK', title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/yp2f.jpg' },
          
          //--Sup2
          { id: 95, performance: '33%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'Noureddine EL ATMANI', title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075400157411.jpg ' },
          { id: 96, performance: '%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'Yassine ABDERRAHIM', title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075402284567.jpg' },
          { id: 97, performance: '67%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'Yassine AMMAR', title: 'Vendeur',tags:['vendeur'], pid: 43, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075358627045.jpg' },
          { id: 98, performance: '42%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'BOUGHANEM AZIZ', title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075400681415.jpg' },

          //--Sup3
          { id: 99, performance: '50%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'LIJASSI ABDERRAHIM', title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075401216523.jpg' },
          { id: 100, performance: '33%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'Said AIT MERIEM', title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075358376640.jpg' },
          { id: 101, performance: '42%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'RMIDI ABDELLAH', title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075401992329.jpg' },
          { id: 102, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'YOUSSEF BERAHMA', title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://nsa40.casimages.com/img/2021/06/01/210601075400425622.jpg' },
          { id: 1102, performance: '25%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'ELHAYDOUGI ABDELAALI', title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/degt.jpeg' },
          

          //Vendeur Oujda
          //--Sup1
          { id: 103, performance: '25%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'YAHIA HANINE', title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080623703589.jpg' },
          { id: 104, performance: '67%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: ' BOUAJAJA MOHAMED ', title: 'Vendeur',tags:['vendeur'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080622778183.jpg' },
          { id: 105, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'JLILOU AZIZ', title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080623957377.jpg' },
          { id: 106, performance: '%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'Abdelhadi RAMDANI', title: 'Vendeur',tags:['vendeur'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080624210353.jpg' },
          { id: 1103, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'LBAKKAY KAHOUAJI', title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080623423144.jpg' },
          { id: 1104, performance: '67%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'Salah BENSEBOU', title: 'Vendeur',tags:['vendeur'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080622641248.jpg' },
          { id: 1105, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'BOUTRIGUI MOHAMMED', title: 'Vendeur',tags:['vendeur'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080623152008.jpg' },
          { id: 1106, performance: '67%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'Abdelilah BOUKARABILA', title: 'Vendeur',tags:['vendeur'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080624491555.jpg ' },
          { id: 1109, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'ACHLOUAOU ABDELMOUNAIM', title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080624805153.jpg' },
          //Vendeur Nador
            //--Sup1
            { id: 107, performance: '', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'YASSINE ABDELLAOUI', title: 'Vendeur',tags:['rouge'], pid: 46, title2: 'Vendeur Nador', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080955703190.jpg' },
            { id: 108, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'KADMOUNE MOHAMMED', title: 'Vendeur',tags:['rouge'], pid: 46, title2: 'Vendeur Nador', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080956203721.jpg' },
            { id: 109, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'AMINE AYOUCHI', title: 'Vendeur',tags:['vendeur'], pid: 46, title2: 'Vendeur Nador', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080956462725.jpg ' },
            { id: 1408, performance: '', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'DGHOUGHI ISSAM', title: 'Vendeur',tags:['rouge'], pid: 46, title2: 'Vendeur Nador', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080956873057.jpg' },
            { id: 1409, performance: '', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'FALAHI KAMAL', title: 'Vendeur',tags:['vendeur'], pid: 46, title2: 'Vendeur Nador', img: 'https://nsa40.casimages.com/img/2021/06/01/210601080955942129.jpg' },
            
          //Vendeur fes Mekns
           //--Sup1
           { id: 110, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'DEBBAGH MAROUANE', title: 'Vendeur',tags:['rouge'], pid: 47, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081454275834.jpg' },
           { id: 111, performance: '33%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'BERCHACH SALIM', title: 'Vendeur',tags:['rouge'], pid: 47, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081453762499.jpg' },
           { id: 112, performance: '67%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'CHOKRI YAHYAOUI', title: 'Vendeur',tags:['vendeur'], pid: 47, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/21060108145420373.jpg' },
           { id: 1510, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: ' HOUMAD ABDERRAHMAN', title: 'Vendeur',tags:['rouge'], pid: 47, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/21060108145524219.jpg' },
           { id: 1511, performance: '', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: ' MANI MUSTAPHA', title: 'Vendeur',tags:['vendeur'], pid: 47, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/21060108145648139.jpg ' },
           { id: 1512, performance: '', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'OMAR SADIK', title: 'Vendeur',tags:['vendeur'], pid: 47, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/0fap.jpg' },
          //--Sup2
          { id: 113, performance: '42%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'BHAYAR BRAHIM', title: 'Vendeur',tags:['rouge'], pid: 48, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081453401053.jpg ' },
          { id: 114, performance: '75%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'MACHBAAT YASSINE', title: 'Vendeur',tags:['vendeur'], pid: 48, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081455790473.jpg' },
          { id: 115, performance: '92%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'ISMAILI ALAOUI', title: 'Vendeur',tags:['vert'], pid: 48, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081455282678.jpg' },
          { id: 1614, performance: '42%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'SAHMOUDI NABIL', title: 'Vendeur',tags:['rouge'], pid: 48, title2: 'Vendeur fes', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081456301295.jpg' },
          { id: 1615, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'BARRA SAID', title: 'Vendeur',tags:['rouge'], pid: 48, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/enb7.jpg' },
          //--Sup3
           { id: 116, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'LOULIDI KAMAL', title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081454768144.jpg' },
            { id: 117, performance: '33%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'LEZINE AYOUB', title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081454534370.jpg' },
            { id: 118, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'AYOUB AZIZI', title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081456817234.jpg' },
            { id: 200, performance: '67%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'LBAKH MUSTAPHA', title: 'Vendeur',tags:['vendeur'], pid: 49, title2: 'Vendeur Mekns', img: 'https://nsa40.casimages.com/img/2021/06/01/21060108145771950.jpg' },
            { id: 2500, performance: '67%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'CHOUJAI TAOUFIQ', title: 'Vendeur',tags:['vendeur'], pid: 49, title2: 'Vendeur Mekns', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081456557941.jpg' },
            { id: 2501, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'ISMAILI MLY YOUSSEF', title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://nsa40.casimages.com/img/2021/06/01/210601081455540160.jpg ' },
// CASABLANCA QUALITATIF QUANTITATIF
          //Vendeur Casa Nord
          //--Sup1
          { id: 121, performance: '67%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'Elkharti Abdelah', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055702447065.jpg' },
          { id: 122, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'OUADDARI MUSTAPHA', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/2106070557059014.jpg' },
          { id: 123, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'BAHADDI MOHAMED', title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/21060705570886628.jpg' },
          { id: 124, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'OULKADI', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055705505958.jpg' },
          { id: 125, performance: '58%', points: 0,Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'', name: 'REDA KANNOUNI', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/21060705570624892.jpg' },
          { id: 126, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'BASTI AYAD', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055708337102.jpg' },
          { id: 127, performance: '83%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'AFFANE MEHDI', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055707307976.jpg' },
          { id: 128, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'FATAWI LOYA', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055703474008.jpg' },
          { id: 129, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'OMAR MOKTADIRI', title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055704506192.jpg' },
          { id: 130, performance: '25%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'REDOUANE ER-REHYLY', title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casablanca Nord', img: '' },
          { id: 131, performance: '75%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'EL HADIDI ZAKARIA', title: 'Vendeur',tags:['vendeur'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055703731147.png' },
          { id: 132, performance: '42%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'AMINE LHAIL', title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casablanca Nord', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055707580025.jpg' },
          //Vendeur Casa EXT
          { id: 133, performance: '75%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'DABOUJI ABDELKARI', title: 'Vendeur',tags:['vendeur'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055701924349.jpg' },
          { id: 134, performance: '75%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'ZOUGAR MOUNIR', title: 'Vendeur',tags:['vendeur'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/21060705570753342.jpg' },
          { id: 135, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'MASNAOUI MOURAD', title: 'Vendeur',tags:['vendeur'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055704251092.jpg' },
          { id: 136, performance: '33%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'HAMZI', title: 'Vendeur',tags:['rouge'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055707840425.jpg' },
          { id: 137, performance: '67%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'BOUHRHEM', title: 'Vendeur',tags:['vendeur'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055701549301.jpg' },
          { id: 138, performance: '25%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'FADIL ABDELKRIM', title: 'Vendeur',tags:['rouge'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055702961583.jpg' },
          { id: 139, performance: '25%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'JOBEIRE LEKBIR', title: 'Vendeur',tags:['rouge'], pid: 51, title2: 'Vendeur Casablanca Ext', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055703996555.jpg' },
          // VENDEUR CASA SUD
          { id: 140, performance: '83%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'EL BAZ BOUJJAMEA', title: 'Vendeur',tags:['vendeur'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055701673828.jpg' },
          { id: 141, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'TAYI REDOUANE', title: 'Vendeur',tags:['vendeur'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055706801821.jpg' },
          { id: 142, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'OUDIR BRAHIM', title: 'Vendeur',tags:['rouge'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055705251745.jpg' },
          { id: 143, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'EL GHARNITI', title: 'Vendeur',tags:['rouge'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055702183593.jpg' },
          { id: 144, performance: '58%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'FETAH HICHAM', title: 'Vendeur',tags:['vendeur'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055703218034.jpg' },
          { id: 145, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'NAQOUR', title: 'Vendeur',tags:['rouge'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055704754191.jpg' },
          { id: 146, performance: '50%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'GHASSAN', title: 'Vendeur',tags:['rouge'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055705764885.jpg' },
          { id: 147, performance: '75%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'SARA RAHHALI', title: 'Vendeur',tags:['vendeur'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055706279832.jpg' },
          { id: 148, performance: '67%', points: 0, Realisation:'',Qaulitatif:'',Encaissement:'',Impayé:'',name: 'SEDDIK ALI', title: 'Vendeur',tags:['vendeur'], pid: 52, title2: 'Vendeur Casablanca Sud', img: 'https://nsa40.casimages.com/img/2021/06/07/210607055706534671.jpg' },
          



         ]} /></div>
      </div>
      
    );
  }
  
  export default ItkaneOrganigramme;