import { Carousel } from 'bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import {choiceCount} from '../action/index';
import CarouselList from './Carousel/CarouselList';
import Accordion from 'react-bootstrap/Accordion'
import Data from './Data';
import { Link } from "react-router-dom";


const mapStateToProps = state => {
    return { 
        modelisation:state.modelisation,
        price: state.totalPrice, 
        
    };

};
  
  const mapDispatchToProps = (dispatch) =>{
    return {
     choiceCount: ()=> dispatch(choiceCount()),
   }
  }
 
  const RecapitulatifConnect = ({state,modelisation, price }) => {
    console.log(modelisation);

    const displayRecapitulatif = () => {
      
      return Object.keys(modelisation).map(key => { 
        console.log(key);
        switch (key) {
          case 'price':
            return (
              <div>
               <span className="categorie">VERSION </span> <br/>{modelisation.name}<br/> <span className="categorie">PRIX </span> <br/> {modelisation.price}€
                <div className="modif">
                <Link to="/Home" className="mofifiercars">
               <img src="https://img.icons8.com/ios-filled/20/000000/paint-palette.png"/> Modifier ? 
                </Link>
                </div>
              </div> 
              
            )
          case 'name':
            return 
          case 'pictures':
            return 
          case 'id':
            return 
          case 'equipements':
            return (
                <div className="col-sm-12">
                  <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <hr></hr>
                        <Accordion.Header> <span className="categorie"> Equipement </span> </Accordion.Header>
                        <Accordion.Body>
                        
                        
                          {Object.keys(modelisation[key]).map((key2)=>(
                            <div>
                                <br></br>
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header> <span className="categorie2">{key2}</span> </Accordion.Header>
                                      {Object.keys(modelisation[key][key2]).map((key3)=>(
                                        <Accordion.Body>
                                        <span className="categorie"> <img className="imageselection" src={modelisation[key][key2][key3].picture}/></span>  <br></br>
                                          <span className="categorie3">{modelisation[key][key2][key3].name}</span> <br></br> <span className="categorie2">Prix</span> {modelisation[key][key2][key3].price}€
                                          <br/><Link to={key} className="mofifiercars">
                                             <img src="https://img.icons8.com/ios-filled/20/000000/paint-palette.png"/> Modifier
                                          </Link>
                                </Accordion.Body>
                                      ))}
                                  </Accordion.Item> 
                                </Accordion>
                            </div>              
                          ))} 
                        </Accordion.Body>
                      </Accordion.Item>  
                      </Accordion>   
                </div>
              )  
              case 'accessoires':
                return (
                    <div className="col-sm-12">
                      <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <hr></hr>
                            <Accordion.Header> <span className="categorie"> Accessoire </span> </Accordion.Header>
                            <Accordion.Body>
                            
                            
                              {Object.keys(modelisation[key]).map((key2)=>(
                                <div>
                                    <br></br>
                                    <Accordion defaultActiveKey="0">
                                      <Accordion.Item eventKey="0">
                                        <Accordion.Header> <span className="categorie2">{key2}</span> </Accordion.Header>
                                          {Object.keys(modelisation[key][key2]).map((key3)=>(
                                            <Accordion.Body>
                                              <span className="categorie3">{modelisation[key][key2][key3].name}</span> <br></br> <span className="categorie2">Prix</span> {modelisation[key][key2][key3].price}€
                                              <br/>
                                              <span className="categorie"> <img className="imageselection" src={modelisation[key][key2][key3].picture}/></span>  <br></br>
                                              <Link to={key} className="mofifiercars">
                                                 <img src="https://img.icons8.com/ios-filled/20/000000/paint-palette.png"/> Modifier
                                              </Link>
                                    </Accordion.Body>
                                          ))}
                                      </Accordion.Item> 
                                    </Accordion>
                                </div>              
                              ))} 
                            </Accordion.Body>
                          </Accordion.Item>  
                          </Accordion>   
                    </div>
                  )              
            case 'picture':
              return 
          default:
            return (
              <div>
                  <hr></hr>                
                  <span className="categorie"> {key}</span> <br/><br/>  <img className="imageselection" src={modelisation[key].picture}/>  <span className="categorie2"> ___{modelisation[key].name}</span> <br/>  <span className="categorie">PRIX</span> <br/> {modelisation[key].price}€
                <br></br>
                  <Link to={key} className="mofifiercars">
               <img src="https://img.icons8.com/ios-filled/20/000000/paint-palette.png"/> Modifier
                </Link>
               </div>
             
              )
        }
        });
      }
      
      return (  
        <>
            <h3 id="titleficherecap">Récapitulatif customisations Alpine</h3>
            <h5 id="selection">/ VOTRE CONFIGURATION</h5>
            <div className="col-sm-6 d-flex justify-content-center w-100" id="ficherecap">
           
        

                <div className='row w-100' id="carouselrecap"> 
                  <CarouselList/>
                  <div className="col-sm-6 PRIXTOTAL">
                     <p>PRIX TOTAL  {parseInt(price)}€</p>
                   </div>

                </div>
                <div className="w-100 recap-list">
                    {displayRecapitulatif() } 
                <div>
            </div>    
          </div>
          </div>      
         </>
        );
    }
const Recapitulatif = connect(mapStateToProps)(RecapitulatifConnect)
export default Recapitulatif;