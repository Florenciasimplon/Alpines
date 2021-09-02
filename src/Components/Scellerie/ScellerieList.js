import React from 'react';
import { connect } from 'react-redux';
import ScellerieCard from './ScellerieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../Data';
import { Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


const mapStateToProps = state => {
    return { 
      ScellerieList: Data.scellerie,
      modelisation:state.modelisation,
      price:state.totalPrice
  
    };
  };


  const ScellerieListConnect = ({ ScellerieList,modelisation,price}) => {
    const displayScellerie = () => {

      return Object.keys(ScellerieList).map(key => {
          return <ScellerieCard key={key} scellerie={ScellerieList[key]} Modelisation={modelisation.name}/>

      });
    }


      return (
        <div className="" id="bgcolors">
        <div className="logofr">
          <h4>personnalisation Scelleries</h4>
          <img className="france" src="images/pngwing.com_3.png" />
        </div>
        <div className=" d-flex justify-content-center w-100">
          {displayScellerie()}
        </div>
        <div className="next d-flex -justify-content-center">
          <div className="col-sm-6 textchoice">
            <h3>MODÈLE CONFIGURÉ : {parseInt(price)} € </h3>
            <Link to="/Jantes">
                  <Button variant="ligth" size="lg" id="suivant">
                    ⇽ Retour
                    </Button>
                </Link>
          </div>
  
          <div className="col-sm-6 buttonchoice">
            <Link to="/Equipements">
              <Button variant="dark" size="lg" id="suivant">
              À suivre / Equipements ➙
              </Button>
            </Link>
          </div>
        </div>
      </div>
      );
    }


const ScellerieList= connect(mapStateToProps)(ScellerieListConnect)
export default ScellerieList;