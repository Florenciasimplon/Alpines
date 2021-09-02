import React from 'react';
import { connect } from 'react-redux';
import EquipementsCard from './EquipementsCard';
import Data from '../Data';
import { Tab, Tabs } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return { 
      EquipementsList: Data.equipements,  
      price:state.totalPrice
    };
  };

 
  const EquipementsListConnect = ({ EquipementsList, price}) => {
    const displayEquipements = (key) => {

      return Object.keys(EquipementsList[key]).map((key2) => {
      
          return <EquipementsCard key={key} equipement={EquipementsList[key][key2]}
          nom={Data.equipements[key][key2].name}
          img= {Data.equipements[key][key2].picture}
          prix={Data.equipements[key][key2].price}
          group={key}
          />
          
      });
    }

   
      return (
        <div className="" id="bgcolors">
        <div className="logofr">
           <h4>Selectionner vos Equipements</h4>
           <img className="france" src="images/pngwing.com_3.png" />         </div>
     <Tabs id="uncontrolled-tab-example" className="col-sm-12 d-flex justify-content-center mb-3 titletab">
     { Object.keys(Data.equipements).map((key)=>{
         return (
             <Tab defaultActiveKey={Data.equipements.design} eventKey={key} title={key} >
                <div className=" d-flex justify-content-center">
                     {displayEquipements(key)}
                 </div>
             </Tab>
         )
     })}
     </Tabs>
     <div className="next d-flex -justify-content-center">
           <div className="col-sm-6 textchoice">
              <h3>MODÈLE CONFIGURÉ : {parseInt(price)} € </h3> 
              <Link to="/Scellerie">
                  <Button variant="ligth" size="lg" id="suivant">
                    ⇽ Retour
                    </Button>
                </Link>
           </div>
           <div className="col-sm-6 buttonchoice">
             <Link to="/Accessoires">
               <Button variant="dark" size="lg" id="suivant">
                 À suivre / Accessoires ➙
               </Button>
             </Link>
           </div>
     </div>
     
</div>   
      )
  }


const EquipementsList= connect(mapStateToProps)(EquipementsListConnect)
export default EquipementsList;
