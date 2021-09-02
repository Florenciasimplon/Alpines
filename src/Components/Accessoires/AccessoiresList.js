import React from 'react';
import { connect } from 'react-redux';
import AccessoiresCard from './AccessoiresCard';
import Data from '../Data';
import { Tab, Tabs } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    return { 
      AccessoiresList: Data.accessoires,  
      price:state.totalPrice
    };
  };

 
  const AccessoiresListConnect = ({ AccessoiresList, price}) => {
    const displayAccessoires = (key) => {

      return Object.keys(AccessoiresList[key]).map((key2) => {
      
          return <AccessoiresCard key={key} accessoire={AccessoiresList[key][key2]}
          nom={Data.accessoires[key][key2].name}
          img= {Data.accessoires[key][key2].picture}
          prix={Data.accessoires[key][key2].price}
          group={key}
          />
          
      });
    }

   
      return (
        <div className="" id="bgcolors">
        <div className="logofr">
           <h4>Selectionner vos Accessoires</h4>
           <img className="france" src="images/pngwing.com_3.png" />         </div>
     <Tabs id="uncontrolled-tab-example" className="col-sm-12 d-flex justify-content-center mb-3 titletab">
     { Object.keys(Data.accessoires).map((key)=>{
         return (
             <Tab defaultActiveKey={Data.accessoires.design} eventKey={key} title={key} >
                  <div className="col-sm-12 d-flex justify-content-center">
                     {displayAccessoires(key)}
                 </div>
             </Tab>
         )
     })}
     </Tabs>
     <div className="next d-flex -justify-content-center">
           <div className="col-sm-6 textchoice">
              <h3>MODÈLE CONFIGURÉ : {parseInt(price)} € </h3>
              <Link to="/Equipements">
                  <Button variant="ligth" size="lg" id="suivant">
                    ⇽ Retour
                    </Button>
                </Link>
           </div>
           <div className="col-sm-6 buttonchoice">
             <Link to="/Recapitulatif">
               <Button variant="dark" size="lg" id="suivant">
                 À suivre / Récapitulatif ➙
               </Button>
             </Link>
           </div>
     </div>
</div> 
      )
  }


const AccessoiresList= connect(mapStateToProps)(AccessoiresListConnect)
export default AccessoiresList;
