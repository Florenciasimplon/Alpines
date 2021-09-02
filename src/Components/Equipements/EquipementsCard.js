import React from "react";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import { choiceEquipements, deleteEquipements,choiceCount } from "../../action/index";



const mapStateToProps = (state, props) => {
  return {
    state: state,
    ownProps: props,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    equipementschoice: (payload) => dispatch(choiceEquipements(payload)),
    deletechoice: (payload) => dispatch(deleteEquipements(payload)),
    choiceCount: ()=> dispatch(choiceCount()),
  };
};
const EquipementsCardConnect = ({state, ownProps, equipementschoice, deletechoice,choiceCount }) => {

  function handleClick(e){
    e.preventDefault();
    if (document.querySelectorAll('[id="'+e.target.id+'"]').length > 1) {
      document.querySelectorAll('[id="'+e.target.id+'"]').forEach((element)=>{
        element.classList.remove('active')
      })
    }
    e.target.classList.toggle('active')
    if (e.target.classList.contains('active')) {
      equipementschoice({equipement: ownProps.equipement, group:ownProps.group});
      choiceCount()
    } else {
      deletechoice({equipement: ownProps.equipement, group:ownProps.group})
      choiceCount()
    }
  }

  return (
  
    <div className="col-sm-2 card center" id='cardcars'>
    <span className="card-title text-white">{ownProps.nom}</span>
     <div className="card-body text-center ">

         <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
         <div className="row Equipements text-white">
           
             <img src={ownProps.img}/>
             <p>{ownProps.prix}€</p>
             <Button variant='light' id={ownProps.equipement.id} className={ownProps.prix == 0? 'active btnEquipement':'btnEquipement'} onClick={(e) => handleClick(e)}>
               Ajouter
             </Button>
         </div>
     </div>
   </div>
 );

};

const EquipementsCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipementsCardConnect);
export default EquipementsCard;
