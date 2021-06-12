import React, { Component } from "react";
import { Link,useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import './components/nav.css'
import Select from '@material-ui/core/Select';
import SearchAgency from "./components/employe/SearchAgency";
import SearchEmploye from "./components/employe/SearchEmploye";
import SearchCode from "./components/employe/SearchCode";


export default class NavHome extends Component {
  state={}
 
  
  

    clear = () => {
        localStorage.clear();
        window.location.reload();
      };
  render() {
    
    
    
    let buttons;
     
        buttons=(<ul className="navbar-nav ml-auto">
          <li style={{marginRight:60}}>
      <SearchAgency/>
      </li>
      <li style={{marginRight:60}}>
      <SearchEmploye />
      </li>
      <li>
      <SearchCode style={{marginLeft:30}}/>
      </li>
      
      
      
    </ul>)
      
      
    return (
        <div  style={{marginTop:1}}>
    <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <div className="collapse navbar-collapse">
            {buttons}
          </div>
        </div>
      </nav>
      </div>
    );

  }
}
