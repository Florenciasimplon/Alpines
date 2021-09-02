import React from "react";
import { connect } from "react-redux";
import {Button, Card} from "react-bootstrap";
import { choiceJantes,choiceCount } from "../../action/index";

const mapStateToProps = (state, props) => {

  return {
    state: state,
    ownProps: props,
  };
};
const mapDispatchToProps = (dispatch) => {

  return {
    janteschoice: (payload) => dispatch(choiceJantes(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
  };
};

const JantesCardConnect = ({ ownProps, janteschoice,Data, choiceCount }) => {

  
  async function selectJantes() {
    await Object.keys(Data.pictures).map((key)=>{
      if (ownProps.Modelisation.name === Data.pictures[key].name && 
        ownProps.Modelisation.couleurs.name === Data.pictures[key].color && ownProps.Jantes.name===Data.pictures[key].jante) {
          janteschoice( {jantes : ownProps.Jantes, images: Data.pictures[key].picturesList});
          choiceCount()
        }
  })
  }
 

  function Jantes() {

 
    if (ownProps.Modelisation.name === ownProps.Jantes.option) {
      return (
        <div className="col-sm-6 m-2" id="jantechoice">

        <Button variant="dark" onClick={()=>selectJantes()}>
          <Card.Img variant="top" src={ownProps.Jantes.picture} />
        </Button>
        <Card.Title className="titlecolors">{ownProps.Jantes.name}</Card.Title>
        <Card.Text className="titlecolors"> {ownProps.Jantes.price}€</Card.Text>
  </div>
      );
    }else{
      return ''
    }
  }

  return Jantes();
};

const JantesCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(JantesCardConnect);
export default JantesCard;
