import React from 'react';
import { connect } from 'react-redux';
import Colors from './Colors';
import Data from '../Data';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const mapStateToProps = state => {

    return { 
      modelisation : state.modelisation,
      price:state.totalPrice
    };
};



  const CouleurListConnect = ({modelisation,price}) => {

    const displayCouleur = () => {
     
      return Object.keys(Data.couleurs).map(key => {
          return <Colors key={key} couleurs={Data.couleurs[key]} modelisation={modelisation}/>
      });
    }

      return (
        <>
          <div className="" id="bgcolors">
            <div className="logofr">
              <h4>Selectionner votre couleur</h4>
              <img className="france" src="images/pngwing.com_3.png" />
            </div>
            <div className="couleurchoicee d-flex justify-content-center">
              {displayCouleur()}
            </div>
            <div className="next d-flex -justify-content-center">
              <div className="col-sm-6 textchoice">
                <h3>MODÈLE CONFIGURÉ : {parseInt(price)} € </h3>
                <Link to="/">
                  <Button variant="ligth" size="lg" id="suivant">
                    ⇽ Retour
                    </Button>
                </Link>
              </div>


              <div className="col-sm-6 buttonchoice">
                <Link to="/Jantes">
                  <Button variant="dark" size="lg" id="suivant">
                    À suivre / Jantes ➙
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }


const colorsList= connect(mapStateToProps)(CouleurListConnect)
export default colorsList;