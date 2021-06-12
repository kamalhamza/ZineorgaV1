import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import "./App.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home.component";
import Nav from "./components/nav.component";
import Login from "./components/login.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Statistique from "./components/statistique.component";
import RechercheAgency from "./components/Recherche.agency";
import RechercheCode from "./components/Recherche.Code";
import RechercheName from "./components/Recherche.Nom";
import Logout from "./components/Logout";

export default class App extends Component {
  state = {};
  componentDidMount = () => {
    const tok = localStorage.getItem("token");
    if (tok) {
      const decoded = jwt_decode(tok);
      this.setState({
        user: decoded,
      });
    }
  };
  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         

          <Switch>
            <Route
              exact
              path="/"
              component={() => <Login user={this.state.user} />}
            />

            <Route
              exact
              path="/home"
              component={() => <Home user={this.state.user} />}
            />
            <Route
              exact
              path="/logout"
              component={() => <Logout/>}
            />
            
  
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
