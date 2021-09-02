import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import {choiceVersion, choiceCount} from '../action/index'
import Data from './Data'

import { Link } from "react-router-dom";

const mapStateToProps = (state, props) => {

  return { 
       state: state,
       ownProps: props };
};
const mapDispatchToProps = (dispatch) =>{
 return {
   carschoice: (payload)=> dispatch(choiceVersion(payload)),
   choiceCount: ()=> dispatch(choiceCount()),
 }
}
const CarsCardConnect = ({ ownProps, carschoice ,choiceCount }) => {

function selectVersion(){

  let imgChoice;

  for (let key = 1; key <= Object.keys(Data.pictures).length; key++) {

    if (ownProps.Cars.name == Data.pictures[key].name) {
      imgChoice = Data.pictures[key].picturesList
     break 
    }
    
  }

  carschoice({choix :ownProps.Cars, images: imgChoice})
  choiceCount()
}

return(
  <div className="col-sm-4 card center" id='cardcars'>
      <div className="card-body text-center">
          <h5 className="card-title">{ownProps.Cars.name}</h5>

          <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
          <div className="row cars">
              <p> {ownProps.Cars.price}</p>
              <img src={ownProps.Cars.picture}/>
          </div>
      </div>
      <Link to="/Colors">
          <Button variant="light" onClick={()=>selectVersion()} className="w-100">Configurer</Button>
        </Link>
  </div>
)
};

const CarsCard = connect(mapStateToProps,mapDispatchToProps)(CarsCardConnect);
export default CarsCard;