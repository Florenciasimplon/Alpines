import React from 'react';
import { connect } from 'react-redux';
import JantesCard from './JantesCard';
import Data from '../Data';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    
    return { 
      Data:Data,
      JantesList: Data.jantes,
      modelisation:state.modelisation,
      price:state.totalPrice
 
    };
  };

 
  const JantesListConnect = ({ JantesList,modelisation, price}) => {
    const displayJantes = () => {

      return Object.keys(JantesList).map(key => {
          return <JantesCard key={key} Jantes={JantesList[key]} Data={Data} Modelisation={modelisation}/>

      });
    }


      return (
        <div className="bgequipement"id="bgcolors">
        <div className="logofr">
          <h4>personnalisation des Jantes</h4>
          <img className="france" src="images/pngwing.com_3.png"/>
        </div>
        <div className='row d-flex justify-content-center w-100'>
          {displayJantes() }
        </div>
        <div className="next d-flex justify-content-center">
      <div className="col-sm-6 textchoice">
        <h3>MODÈLE CONFIGURÉ : {parseInt(price)} € </h3>
        <Link to="/Colors">
                  <Button variant="ligth" size="lg" id="suivant">
                    ⇽ Retour
                    </Button>
                </Link>
      </div>

      <div className="col-sm-6 buttonchoice">
        <Link to="/Scellerie">
          <Button variant="dark" size="lg" id="suivant">
          À suivre / Scelleries ➙
          </Button>
        </Link>
      </div>
    </div>
    </div>
      );
    }


const JantesList= connect(mapStateToProps)(JantesListConnect)
export default JantesList;
