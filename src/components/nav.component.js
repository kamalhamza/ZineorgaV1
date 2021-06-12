import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './nav.css';
import Image from 'react-bootstrap/Image'
import { IconContext } from 'react-icons';
import zine from '../Images/zine.png';
import * as AiIcons from 'react-icons/ai';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  

  const clear = () => {
    localStorage.clear();
   
  };

  return (
    <>
    <div className='zindex'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        
        <Link to='#' className='menu-bars'>
        
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <p style={{flex:1,justifySelf:'center',color:'#18A4BC',fontSize:22,fontWeight:'bold',marginTop:20}}>ZINE CAPITAL INVEST</p>
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{fontSize:26}}/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
              
            })}
            <li className="nav-text">
            <a href='/logout' className='nav-module' onClick={clear}>
            <AiIcons.AiOutlineLogout/>
                <span style={{fontSize:16}}>Deconnexion</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;