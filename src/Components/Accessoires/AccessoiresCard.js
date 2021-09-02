import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import { choiceAccessoires, deleteAccessoires,choiceCount } from "../../action/index";



const mapStateToProps = (state, props) => {
  return {
    state: state,
    ownProps: props,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    accessoireschoice: (payload) => dispatch(choiceAccessoires(payload)),
    deletechoice: (payload) => dispatch(deleteAccessoires(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
  };
};
const AccessoiresCardConnect = ({ ownProps, accessoireschoice, deletechoice, choiceCount }) => {


  function handleClick(e){

    e.preventDefault();
    if (document.querySelectorAll('[id="'+e.target.id+'"]').length > 1) {
      document.querySelectorAll('[id="'+e.target.id+'"]').forEach((element)=>{
        element.classList.remove('active')
      })
    }
    e.target.classList.toggle('active')
    if (e.target.classList.contains('active')) {
      accessoireschoice({accessoire: ownProps.accessoire, group:ownProps.group})
      choiceCount()
    } else {
      deletechoice({accessoire: ownProps.accessoire, group:ownProps.group})
      choiceCount()
    }
  }

  return (
  
<div className="card center" id="cardcars">
      <h6 className="card-title text-white">{ownProps.nom}</h6>
      <div className="card-body text-center">
        <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
        <div className="row Equipements text-white">
          <img src={ownProps.img} />
          <p>{ownProps.prix}€</p>
          <Button variant="light" id={ownProps.accessoire.id} className={ownProps.prix == 0 ? "active btnEquipement" : "btnEquipement" }
                  onClick={(e) => handleClick(e)}>Ajouter
          </Button>
         </div>
        </div>
    </div>
  );
};

const AccessoiresCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessoiresCardConnect);
export default AccessoiresCard;
