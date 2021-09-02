import React from "react";
import { connect } from "react-redux";
import {Button, Card} from 'react-bootstrap'
import {choiceScellerie, choiceCount} from '../../action/index'


const mapStateToProps = (state, props) => {

  return { 

       state: state,
       ownProps: props };
};
const mapDispatchToProps = (dispatch) =>{
 return {
   scelleriechoice: (payload)=> dispatch(choiceScellerie(payload)),
   choiceCount: ()=> dispatch(choiceCount()),
 }
}
const ScellerieCardConnect = ({ ownProps, scelleriechoice, choiceCount }) => {

function selectScellerie(){
    scelleriechoice({scellerie :ownProps.scellerie})
    choiceCount()
}
function Scellerie() {
 
  if (ownProps.Modelisation ===ownProps.scellerie.option) {
    return (
      <div className="col-sm-6 m-2" id="jantechoice">
      <Button variant="dark" onClick={()=>selectScellerie()}>
        <Card.Img variant="top" src={ownProps.scellerie.picture} />
      </Button>
      <Card.Title className="titlecolors">{ownProps.scellerie.name}</Card.Title>
      <Card.Text className="titlecolors">{ownProps.scellerie.price}€</Card.Text>
    </div>
    );
  } else {
    return "";
  }
}

return Scellerie();
};

const ScellerieCard = connect(mapStateToProps,mapDispatchToProps)(ScellerieCardConnect);
export default ScellerieCard;