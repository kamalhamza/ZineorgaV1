import { Icon } from "@material-ui/core";
import React from "react";
import { Link,useHistory,withRouter } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";



const Employe = ({ employe }) => {
  return (
    
    <>
      

      <Card className="my-3 p-3 rounded h-90 " style={{marginRight:40,marginLeft:40}}>
        <Row>
          <Col>
            
              <Row style={{ marginBottom: 5, marginTop: 5 }}>
                <Card.Text
                  style={{
                    fontSize: 20,
                    width: 400,
                    fontWeight: "bold",
                    color: "#18a4bc",
                  }}
                >{`${employe.nom}`}</Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Code Vendeur :{` ${employe.Code}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Superviseur:{` ${employe.superviseur}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Circuit : {` ${employe.circuit}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Activité :{` ${employe.activite}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Agence : {` ${employe.agence}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Secteur :{` ${employe.secteur}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Date de naissance :{` ${employe.datenaissance}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Date d'entrée :{` ${employe.dateentree}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Ancienneté :{` ${employe.ancienete}`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  Niveau Scolaire:
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20 }}>
                  {` ${
                    employe.niveauscolaire.length > 30
                      ? employe.niveauscolaire.substring(0, 20 - 10) + "..."
                      : employe.niveauscolaire
                  }`}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text style={{ marginLeft: 20, marginBottom: 10 }}>
                  Salaire :{` ${employe.salaire}`} Dh
                </Card.Text>
              </Row>
            
          </Col>
                  </Row>
        
        <Link to={`/stats/${employe.id}`} class="btn btn-info btn-large  " role="button" aria-pressed="true" style={{marginTop:10}}>Statistique</Link>
        
        
      </Card>
    </>
  );
};

export default Employe;
