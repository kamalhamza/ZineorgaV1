import React from 'react'
import '../orga.css'
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import * as AiIcons from 'react-icons/ai';
import OrgChart from '../../mychart'

function BlekisOrganigramme() {
  
    return (
      
      
        <div className='bodyorgan' >
          <Link to ='/home' className='retour'><AiIcons.AiFillCaretLeft style={{marginTop:5,marginLeft:-1400,marginBottom:10,fontSize:30,backgroundColor:'transparent'}}/>
           </Link>
            <div className='bodyorga'>
         <OrgChart 
        
         nodes={[
          { id: 1,tags: ["entity"], title: "[BLEKIS] Zone Sud"},
          { id: 2,tags: ["entity"], title: "[BLEKIS] Zone Nord"},

          { id: 3, performance: 33, points:0, name: 'ABDERRAHMAN FAKIR', title: 'Responsable', pid: 1, title2: 'Responsable Région', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061831752040.jpg' },
          { id: 4, performance: 33, points:0, name: 'IBRAHIM LGSAYER', title: 'Responsable', pid: 2, title2: 'Responsable Région', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061831962300.jpg' },
          { id: 5, performance: 33, points:0, name: ' SAID MOTAWAKIL', title: 'Résponsable', pid: 3, title2: 'Responsable Pole', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061832220743.jpg' },
          { id: 6, performance: 33, points:0, name: 'BOUCHAIB CHERDOUH', title: 'Résponsable', pid: 4, title2: 'Responsable Pole', img: 'https://nsa40.casimages.com/img/2021/06/07/210607061831620608.jpg' },


          


          //Regionaux Sud
          { id: 7, performance: '29.4', points: 17, name: 'Amine Abir', title: 'Régionale', pid: 5,tags:['rouge'] , title2: 'Régionale Marrakech/Beni Mellal', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315653270.jpg' },
          { id: 9, performance: '', points: 1, name: '', title: 'Régionale', pid: 5,tags:['rouge'] , img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 10, performance: '18.7%', points: 9, name: 'LHOUCINE EL FAKIR ', title: 'Régionale', tags:['rouge'] ,pid: 5, title2: 'Régionale Agadir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010316433731.jpg' },
          { id: 11, performance: '', points:0, name: '', title: 'Régionale', pid: 5, title2: '',tags:['rouge'] , img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 12, performance: '20.7%', points:0, name: 'Ahmed HABBOUBI', title: 'Régionale', pid: 5,tags:['rouge'] , title2: 'Régionale Casablanca', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010316168319.jpg' },
          //Regionaux Nord
          { id: 13, performance: '29.4%', points: 11, name: 'Youssef Jouichat', title: 'Régionale',tags:['rouge'] , pid: 6, title2: 'Régionale Tanger', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315394789.jpg' },
          { id: 14, performance: '30%', points: 15, name: 'Khalid Kharti', title: 'Régionale',tags:['rouge'] , pid: 6, title2: 'Régionale Salé', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010314961805.jpg' },
          { id: 15, performance: '25%', points: 5, name: 'Mustapha Maher', title: 'Régionale',tags:['rouge'] , pid: 6, title2: 'Régionale oujda', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315114181.jpg' },
          { id: 16, performance: '25%', points: 5, name: 'Chamesddine karafi', title: 'Régionale',tags:['rouge'] , pid: 6, title2: 'Régionale Nador', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010314707809.jpg' },
          { id: 17, performance: '30.3%', points: 13, name: 'Boulbaz Mohamed', title: 'Régionale', tags:['rouge'] ,pid: 6, title2: 'Régionale Fes/Meknes', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010315933886.jpg' },
          
          { id: 18, performance: '29.5%', points: 13, name: 'Ahmed HABBOUBI', title: 'Régionale', tags:['rouge'] ,pid: 6, title2: 'Régionale Casablanca', img: 'https://nsa40.casimages.com/img/2021/05/30/210530010316168319.jpg' },
          //Agence Sud
          { id: 19,tags: ["entity"], title: "Agence Marrakech",pid :7},
          { id: 20,tags: ["entity"], title: "Agence Beni Mellal",pid :7},
          { id: 21,tags: ["entity"], title: "Agence Tinghir",pid :9},
          { id: 22,tags: ["entity"], title: "Agence Agadir",pid :10},
          { id: 23,tags: ["entity"], title: "Agence El jadida",pid :11},
          { id: 24,tags: ["entity"], title: "Casablanca sud",pid :12},
          // Agence Nord
          { id: 25,tags: ["entity"], title: "Agence Tanger",pid :13},
          { id: 26,tags: ["entity"], title: "Agence Salé",pid :14},
          { id: 27,tags: ["entity"], title: "Agence Oujda",pid :15},
          { id: 28,tags: ["entity"], title: "Agence Nador",pid :16},
          { id: 29,tags: ["entity"], title: "Agence Fes et Meknes",pid :17},
          { id: 30,tags: ["entity"], title: "Casablanca Nord",pid :18},

          //Superviseur Agence Marrakech
          { id: 31, performance: '27%', points: 4, name: 'Youssef Ibno Joubair', title: 'Superviseur', tags:['rouge'] ,pid: 19, title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124051153313.jpg' },
          { id: 32, performance: '33%', points: 3, name: 'Bellari Med', title: 'Superviseur', pid: 19,tags:['rouge'] , title2: 'Superviseur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124048582601.jpg' },
          //Superviseur Agence BeniMellal
          { id: 33, performance: '24.6%', points: 3, name: 'Anour El Maazaz', title: 'Superviseur', pid: 20,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124045691852.jpg' },
          { id: 34, performance: '33%', points: 3, name: 'Assedam Med', title: 'Superviseur', pid: 20, tags:['rouge'] ,title2: 'Superviseur Tinghir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          //Superviseur Agence Tinghir
          { id: 35, performance: '33%', points: 1, name: 'Brahim Amghar', title: 'Superviseur', pid: 21,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124045963281.jpg' },
        
          //Superviseur Agence Agadir
          { id: 36, performance: '18.7%', points: 8, name: 'Hittous Mohamed', title: 'Superviseur', pid: 22, tags:['rouge'] ,title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124046790279.jpg' },
          
          //Superviseur Agence El JADIDA
          { id: 37, performance: '19.3%', points: 6, name: 'Hamza Maataoui', title: 'Superviseur', pid: 23,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124046350467.jpg' },
          //Superviseur Agence Casablanca sud
          { id: 38, performance: '20.7%', points: 10, name: 'Houari Moutaqui', title: 'Superviseur', pid: 24, tags:['rouge'] ,title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/21053012404746271.jpg' },

          //Superviseur Agence Tanger
          { id: 39, performance: '30.3%', points: 3, name: 'Lotfi Reguragi', title: 'Superviseur', pid: 25, tags:['rouge'] ,title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/21053012404875325.jpg' },
          { id: 40, performance: '25%', points: 2, name: 'Karim Taqi', title: 'Superviseur', pid: 25, tags:['rouge'] ,title2: 'Superviseur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124047817073.jpg' },
          { id: 41, performance: '33%', points: 3, name: 'Salah Zougar', title: 'Superviseur', pid: 25,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124050900923.jpg' },
          //Superviseur Agence Salé
          { id: 42, performance: '', points: 4, name: 'Ezzimy Abdeljalil', title: 'Superviseur', pid: 26, tags:['rouge'] ,title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124046528517.jpg' },
          { id: 43, performance: '33%', points: 4, name: 'Sadik Annahal', title: 'Superviseur', pid: 26,tags:['rouge'] , title2: 'Superviseur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124050642669.jpg' },
          { id: 44, performance: '27.6%', points: 4, name: 'Maimi Mahjoub', title: 'Superviseur', pid: 26,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124048326210.jpg' },
          //Superviseur Agence Oujda
          { id: 45, performance: '25%', points: 4, name: 'AbdelFetah Cherifi', title: 'Superviseur', pid: 27,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124045443536.jpg' },
          //Superviseur Agence Nador
          { id: 46, performance: '25%', points: 3, name: 'Taoufik Kaddouri', title: 'Superviseur', pid: 28,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124047303293.jpg' },
          //Superviseur Agence Fes Meknes
          { id: 47, performance: '30.3%', points: 3, name: 'Aziz Meliani', title: 'Superviseur', pid: 29,tags:['rouge'] , title2: 'Superviseur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124049346048.jpg' },
          { id: 48, performance: '27.6', points: 3, name: 'Tazi Cherti', title: 'Superviseur', pid: 29, tags:['rouge'] ,title2: 'Superviseur Agadir/Laayoune', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 49, performance: '33%', points: 4, name: 'Karbich Khalid', title: 'Superviseur', pid: 29,tags:['rouge'] , title2: 'Superviseur Agadir/Laayoune', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124047561522.jpg' },
          //Superviseur Casablanca NORD
          { id: 50, performance: '29.5%', points: 12, name: 'Rabii ASSAS', title: 'Superviseur', pid: 30,tags:['rouge'] ,title2: 'Superviseur Tinghir', img: 'https://nsa40.casimages.com/img/2021/05/30/210530124050117213.jpg' },

          //*******VENDEUR*********VENDEUR***********VENDEUR***************VENDEUR************VENDEUR*******VENDEUR*****VENDEUR****VENDEUR***************VENDEUR****************************************************************************************** */
          //Vendeur Marrakech
          //---Sup1
          { id: 51, performance: '25%', points:0, name: 'Brahim El Alaioui', Realisation:'0',Qaulitatif:'1.5',Impayé:'0.5',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/k45i.jpg' },
          { id: 52, performance: '33%', points:0, name: 'Monahi', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/2cuj.jpg' },
          { id: 53, performance: '33%', points:0, name: 'Soufiani Khalid', Realisation:'1',Qaulitatif:'2',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/upjm.jpg' },
          { id: 54, performance: '17%', points:0, name: 'Jaidi Smail', Realisation:'0',Qaulitatif:'1.5',Impayé:'0',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 31, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/8frk.jpg' },

          //--Sup2
         { id: 55, performance: '33%', points:0, name: 'Lafrid Jaafar', Realisation:'0',Qaulitatif:'2',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 32, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/a7ce.jpg' },
          { id: 56, performance: '33%', points:0, name: 'Boujaata lahoussine', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 32, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/46vf.jpg' },
          { id: 57, performance: '33%', points:0, name: 'Bendaoui Mohamed', Realisation:'0.5',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 32, title2: 'Vendeur Marrakech', img: 'https://zupimages.net/up/21/21/4lwg.jpg' },

          //Vendeur BeniMellal
          //-Sup1
          { id: 58, performance: '33%', points:0, name: 'Madkour Younes', Realisation:'0.5',Qaulitatif:'2',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/21/yfk3.jpg' },
          { id: 59, performance: '8%', points:0, name: 'Ben Said Hafid', Realisation:'0',Qaulitatif:'0.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/21/qqmk.jpg' },
          { id: 60, performance: '33%', points:0, name: 'El Youssfi alaoui', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 33, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          //-Sup2
          { id: 61, performance: '33%', points:0, name: 'Abdaoui', Realisation:'0.5',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 34, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/21/daly.jpg' },
          { id: 62, performance: '33%', points:0, name: 'Charaf Achraf', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 34, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/21/rrkl.jpg' },
          { id: 63, performance: '33%', points:0, name: 'Ait Abbi Abdelati', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 34, title2: 'Vendeur BeniMellal', img: 'https://zupimages.net/up/21/21/p2pb.jpg' },

          //Vendeur Tinghir
          //-sup1
          { id: 64, performance: '33%', points:0, name: 'Ait Bella Mohamed', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 35, title2: 'Vendeur Tinghir', img: 'https://zupimages.net/up/21/21/9zc6.jpg' },
          //Vendeur Agadir
          //-sup1
          { id: 65, performance: '25%', points:0, name: 'Ajerrar Abdellah', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/tikn.png' },
          { id: 201, performance: '17%', points:0, name: 'Essaidy Said', Realisation:'0',Qaulitatif:'1',Impayé:'0.5',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/zwdi.png' },
          { id: 202, performance: '0%', points:0, name: 'El Fatouaki', Realisation:'0.5',Qaulitatif:'1.5',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/zzjo.png' },
          { id: 203, performance: '33%', points:0, name: 'Mimi Mustapha', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 204, performance: '17%', points:0, name: 'Ignaoun el hafid', Realisation:'0',Qaulitatif:'1.5',Impayé:'0.5',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/moe2.png' },
          { id: 205, performance: '0%', points:0, name: 'Erradi Abdelfatah', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/xew0.png' },
          { id: 208, performance: '25%', points:0, name: 'Ouaich ALi', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/6zd2.png' },
          { id: 209, performance: '33%', points:0, name: 'Sydad Youssef', Realisation:'0',Qaulitatif:'0',Impayé:'0.',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 36, title2: 'Vendeur Agadir', img: 'https://zupimages.net/up/21/21/henh.png' },
       
          //Vendeur El jadida
          //-sup1
          { id: 66, performance: '0%', points:0, name: 'Abdelmajid AFYF', Realisation:'0',Qaulitatif:'1',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://zupimages.net/up/21/21/hh0z.png' },
          { id: 67, performance: '33%', points:0, name: 'Hammou chamraoui', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://zupimages.net/up/21/21/eqq3.png' },
          { id: 68, performance: '8%', points:0, name: 'Biaz Fatmi', Realisation:'0.5',Qaulitatif:'0.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://zupimages.net/up/21/21/os7p.png' },
          { id: 69, performance: '25%', points:0, name: 'Khalil Abdelmajid', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://zupimages.net/up/21/21/3k7t.png' },
          { id: 70, performance: '33%', points:0, name: 'Omar boujib', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://zupimages.net/up/21/21/itn4.png' },
          { id: 71, performance: '17%', points:0, name: 'Bayade AbdelHakim', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 37, title2: 'Vendeur El jadida', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          //Vendu Casablanca SUD
          //-sup1
          { id: 72, performance: '33%', points: 0, name: 'Salah Lassass', Realisation:'0',Qaulitatif:'2',Impayé:'1',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011219975576.jpg' },
          { id: 73, performance: '33%', points: 0, name: 'Sabil Moussa', Realisation:'0',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/21061201122495277.jpg' },
          { id: 74, performance: '17%', points: 0, name: 'Fouad Aziz', Realisation:'1',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011222312234.jpg' },
          { id: 75, performance: '17%', points: 0, name: 'Achraf Younes', Realisation:'0',Qaulitatif:'1.5',Impayé:'0',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011220231457.jpg' },
          { id: 76, performance: '33%', points: 0, name: 'Abderahim', Realisation:'0.5',Qaulitatif:'2.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 77, performance: '33%', points: 0, name: 'El jaouhari Jalal', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/21061201122247100.jpg' },
          { id: 78, performance: '8%', points: 0, name: 'Younes Amouche', Realisation:'0',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011220488162.jpg' },
          { id: 79, performance: '8%', points: 0, name: 'Alhyan Barkouki', Realisation:'1',Qaulitatif:'1.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011220988953.jpg' },
          { id: 80, performance: '17%', points: 0, name: 'Khalid Skhoun', Realisation:'0.5',Qaulitatif:'1.5',Impayé:'0.5',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011223581210.jpg' },
          { id: 81, performance: '8%', points: 0, name: 'Youssef Samiti', Realisation:'0',Qaulitatif:'1.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 38, title2: 'Vendeur Casablanca SUD', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011220736929.jpg' },
          //Vendeur Tanger
          //--Sup1
          { id: 82, performance: '33%', points: 0, name: 'Abdelwahd bilal', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/q5sm.jpg' },
          { id: 83, performance: '25%', points: 0, name: 'El Mouden Med', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/a6ix.jpg' },
          { id: 84, performance: '33%', points: 0, name: 'Mostapha El jaida', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 39, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/a9or.jpg' },
          //--Sup2
          { id: 85, performance: '17%', points: 0, name: 'Salaheddine', Realisation:'0',Qaulitatif:'2',Impayé:'0',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 40, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/vqfm.jpg' },
          { id: 86, performance: '33%', points: 0, name: 'Allou Bouazza', Realisation:'0.5',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 40, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/j0vn.jpg' },
          
          //--Sup3
          { id: 87, performance: '33%', points: 0, name: 'Med Ahouaz', Realisation:'0',Qaulitatif:'2',Impayé:'0',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 41, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/19/4fu5.png' },
          { id: 88, performance: '33%', points: 0, name: 'El Majaouri Mohammed', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 41, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/6d9v.jpg' },
          { id: 89, performance: '33%', points: 0, name: 'Ahabchane Driss', Realisation:'0.5',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 41, title2: 'Vendeur Tanger', img: 'https://zupimages.net/up/21/21/6fkf.jpg' },
          //Vendeur Salé
          //--Sup1
          { id: 90, performance: '%', points: 0, name: 'Fanacha Abdenaim', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/vum3.jpg' },
          { id: 91, performance: '%', points: 0, name: 'Ait Lbach Rachid', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/g77v.jpg' },
          { id: 92, performance: '%', points: 0, name: 'Mohamed Ouznahou', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/oit3.jpg' },
          { id: 93, performance: '%', points: 0, name: 'Mourrar Med', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 42, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/yp2f.jpg' },
          
          //--Sup2
          { id: 95, performance: '%', points: 0, name: 'Hassan Azlay', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/6jk9.jpeg' },
          { id: 96, performance: '33%', points: 0, name: 'Khalid Ramdane', Realisation:'0.5',Qaulitatif:'2',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/ed96.jpeg' },
          { id: 97, performance: '%', points: 0, name: 'Ayoub Ruiha', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/n9nc.jpeg' },
          { id: 98, performance: '33%', points: 0, name: 'Amine Shairo', Realisation:'0',Qaulitatif:'0',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 43, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/387t.jpeg' },

          //--Sup3
          { id: 99, performance: '33%', points: 0, name: 'Hamza El khaidouri', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/l3t9.jpeg' },
          { id: 100, performance: '33%', points: 0, name: 'Abdellah Abouel Fatah', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/6h10.jpeg' },
          { id: 101, performance: '17%', points: 0, name: 'Noureddine El Qady', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/nxu0.jpeg' },
          { id: 102, performance: '33%', points: 0, name: 'El Asri Abdelhakim', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 44, title2: 'Vendeur Salé', img: 'https://zupimages.net/up/21/21/degt.jpeg' },

          //Vendeur Oujda
          //--Sup1
          { id: 103, performance: '%', points: 0, name: 'Tahar Amkhaou', Realisation:'0',Qaulitatif:'0.5',Impayé:'0',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://zupimages.net/up/21/21/1t9y.jpg' },
          { id: 104, performance: '33%', points: 0, name: 'Assil Slissi', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://zupimages.net/up/21/21/vzeo.jpg' },
          { id: 105, performance: '33%', points: 0, name: 'Mohammed Hamdaou', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://zupimages.net/up/21/21/tir1.jpg' },
          { id: 106, performance: '17%', points: 0, name: 'Ait el mouden Ahmed', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'0',title: 'Vendeur',tags:['rouge'], pid: 45, title2: 'Vendeur Oujda', img: 'https://zupimages.net/up/21/21/g61o.jpg' },
          //Vendeur Nador
            //--Sup1
            { id: 107, performance: '17%', points: 0, name: 'Maslouhi Abdelhafida', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 46, title2: 'Vendeur Nador', img: 'https://zupimages.net/up/21/21/gi91.jpeg' },
            { id: 108, performance: '33%', points: 0, name: 'Walid Farou', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 46, title2: 'Vendeur Nador', img: 'https://zupimages.net/up/21/21/u7ks.jpeg' },
            { id: 109, performance: '%', points: 0, name: 'Hadine Med', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 46, title2: 'Vendeur Nador', img: 'https://zupimages.net/up/21/21/lih9.jpeg' },
            
          //Vendeur fes Mekns
           //--Sup1
           { id: 110, performance: '25%', points: 0, name: 'Mtitou Issam', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 47, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/cvtk.jpg' },
           { id: 111, performance: '33%', points: 0, name: 'Bakaddour', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 47, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/lp7s.jpg' },
           { id: 112, performance: '33%', points: 0, name: 'Jarid Yassine', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 47, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/0fap.jpg' },
          //--Sup2
          { id: 113, performance: '17%', points: 0, name: 'Lahard Rachid', Realisation:'0',Qaulitatif:'1',Impayé:'0',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 48, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/uunl.jpg' },
          { id: 114, performance: '33%', points: 0, name: 'Berrada Youssef', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 48, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/ey59.jpg' },
          { id: 115, performance: '33%', points: 0, name: 'Farghous Hicham', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 48, title2: 'Vendeur fes', img: 'https://zupimages.net/up/21/21/enb7.jpg' },
          //--Sup3
           { id: 116, performance: '33%', points: 0, name: 'Kafi Zakaria', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://zupimages.net/up/21/21/hgyp.jpg' },
            { id: 117, performance: '33%', points: 0, name: 'Bakali Adnanea', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://zupimages.net/up/21/21/m5t7.jpg' },
            { id: 118, performance: '33%', points: 0, name: 'Tahiri Mohammed', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://zupimages.net/up/21/21/t56e.jpg' },
            { id: 200, performance: '33%', points: 0, name: 'Louchi Mounir', Realisation:'1',Qaulitatif:'2.5',Impayé:'0',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 49, title2: 'Vendeur Mekns', img: 'https://zupimages.net/up/21/21/petu.jpg' },
  
          //Vendeur Casa Nord
          //--Sup1
          { id: 119, performance: '33%', points: 0, name: 'Jaddi Younes', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/21061201122369186.jpg' },
          { id: 120, performance: '8%', points: 0, name: 'Oubouhouche', Realisation:'0',Qaulitatif:'1.5',Impayé:'0.5',Encaissement:'0.5',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011224873414.jpg' },
          { id: 121, performance: '33%', points: 0, name: ' Moutawakil', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011223328037.jpg' },
          { id: 122, performance: '33%', points: 0, name: 'Oukhati Zidan', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011219515648.jpg' },
          { id: 123, performance: '33%', points: 0, name: 'Hanin Nabil', Realisation:'0',Qaulitatif:'2',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011224345199.jpg' },
          { id: 124, performance: '25%', points: 0, name: 'Oubouhouch Lahcen', Realisation:'0',Qaulitatif:'1.5',Impayé:'0.5',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011224603525.jpg' },
          { id: 125, performance: '25%', points: 0, name: 'Hallabou Hicham', Realisation:'0.5',Qaulitatif:'1.5',Impayé:'0.5',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011222560788.jpg' },
          { id: 126, performance: '33%', points: 0, name: 'Bougayou Houcine', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011221524024.png' },
          { id: 127, performance: '33%', points: 0, name: 'Houcine Senhaji', Realisation:'0',Qaulitatif:'0.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011222824791.jpg' },
          { id: 128, performance: '33%', points: 0, name: 'Chahli Younes', Realisation:'0',Qaulitatif:'1.5',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011221790575.jpg' },
          { id: 129, performance: '33%', points: 0, name: 'Mehdi Zine', Realisation:'0',Qaulitatif:'2',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011223831586.jpg' },
          { id: 130, performance: '33%', points: 0, name: 'Rachik Mohamed', Realisation:'0',Qaulitatif:'1',Impayé:'1',Encaissement:'1',title: 'Vendeur',tags:['rouge'], pid: 50, title2: 'Vendeur Casa Nord', img: 'https://nsa40.casimages.com/img/2021/06/12/210612011219724408.jpg' },


          

          

          
          
          
         ]} /></div>
      </div>
      
    );
  }
  
  export default BlekisOrganigramme;