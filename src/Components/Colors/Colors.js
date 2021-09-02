import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {choiceColors, choiceCount} from '../../action/index';
import Data from '../Data'

const mapStateToProps = (state, props) => {
    return { 
         state: state,
         modelisation: props.modelisation,
         ownProps: props 
        };
};


 const mapDispatchToProps = (dispatch) =>{
   return {
    carscolors: (payload)=> dispatch(choiceColors(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
   }
 }
const colorsConnect = ({ modelisation, ownProps, carscolors, choiceCount}) => {

    function choiceImages(){
      for (let key = 1; key <= Object.keys(Data.pictures).length; key++) {
        if (modelisation.name === Data.pictures[key].name && 
          ownProps.couleurs.name === Data.pictures[key].color ) {
            return Data.pictures[key].picturesList
        } 
      }
    }
    async function selectColors(){
      let test = await choiceImages();
    
      
      await console.log(test);
      await carscolors({ color: ownProps.couleurs, images: test})
      await choiceCount()
   }

  return(
    <>

<div className="col-sm-3 m-4" id="colorschoice">
        <Button variant="dark" onClick={(e)=>selectColors(e)} className="colorschoice">
          <Card.Img variant="top" src={ownProps.couleurs.picture} className="colorsImg" />
        </Button>
        <Card.Title className="titlecolors">{ownProps.couleurs.name}</Card.Title>
        <Card.Text className="titlecolors">{ownProps.couleurs.price}€</Card.Text>
      </div>
    </>
  )
};
const Colors = connect(mapStateToProps,mapDispatchToProps)(colorsConnect);
export default Colors;