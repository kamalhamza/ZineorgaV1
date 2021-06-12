import React, { Component ,useEffect,useState} from "react";
import "./stats.css";
import { Row, Col } from "react-bootstrap";


import CanvasJSReact from "../assets/canvasjs.react";
import axios from "axios";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Statistique = (props) => {
const employeId= props.match.params.userid;
const [employe,setEmploye]=useState(0)
const config={
  headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
  }
}
useEffect(()=>{
  axios.get(`employe/${employeId}`,config)
  .then
  (
    res=>{
      setEmploye(res.data)
    }
  )
  .catch
  (err=>{
    console.log(err)
  })
},[])

  const options = {
    animationEnabled: true,
    theme: "light2",
    

    title: {
      text: "Pénétration ( 7mois ) %",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Thé", y: employe.penethe },
          { label: "Couscous", y: employe.penecsc },
          { label: "Pates", y: employe.penepates },
          { label: "Farine", y: employe.penefarine },
          { label: "Semoule", y: employe.penesemoule },
          { label: "Riz", y: employe.peneriz },
        ],
      },
    ],
  };
  const options2 = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Réalisation ( 7 Mois ) %",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Thé", y: employe.reathe },
          { label: "Couscous", y: employe.reacouscous },
          { label: "Pates", y: employe.reapate },
          { label: "Farine", y: employe.reafarine },
          { label: "Semoule", y: employe.reasemoule },
          { label: "Riz", y: employe.reariz },
        ],
      },
    ],
  };
  const options3 = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Productivité",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",		
				startAngle: -90,
        dataPoints: [
          
          { label: "Productivité", y: employe.productivite },
          { label: "Reste", y: 100-employe.productivite },
        ],
      },
    ],
  };
  const options4 = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Couverture",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",		
				startAngle: -90,
        dataPoints: [
          
          { label: "Couverture", y: employe.couverture },
          { label: "Reste", y: 100-employe.couverture},
        ],
      },
    ],
  };

  return (
    <div className="bod">
      <div className="containerr">
    <Row className="emp">
      <Col >

        <CanvasJSChart
          options={options2}
          /* onRef = {ref => this.chart = ref} */
        />
        
        
      </Col>
      
      <Col >
      
        <CanvasJSChart 
          options={options}
          /* onRef = {ref => this.chart = ref} */
        />

      </Col>
    </Row>
    <Row style={{marginTop:10,marginBottom:20}}>
      <Col >
      
      <CanvasJSChart 
        options={options3}
        /* onRef = {ref => this.chart = ref} */
      />

    </Col>
    <Col >
      
      <CanvasJSChart 
        options={options4}
        /* onRef = {ref => this.chart = ref} */
      />

    </Col>
  </Row>
    </div>
    </div>
    
  );
};

export default Statistique;
