import React from 'react';
import './App.css';
import CarsList from './CarsList';
import JantesList from './Jantes/JantesList';
import ScellerieList from './Scellerie/ScellerieList';
import EquipementsList from './Equipements/EquipementsList';
import AccessoiresList from './Accessoires/AccessoiresList';
import ColorsList from './Colors/ColorsList';
import CarouselList from './Carousel/CarouselList';
import { Navbar, Container, Nav,Carousel} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Recapitulatif from './Recaputilatif';

function App() {
  return (
    <div className="App ">  
      <Router>    
      <header className="App-header ">
        <Navbar bg="transparent" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> 
            <img
          src="images/pngwing.com_1.png"
          width="25%"
          height="50%"
          className="d-inline-block align-top"
        /></Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/"><img src="images/home_house_icon-icons.com_49851.png"></img></Link>
              </Nav>
          </Container>
        </Navbar>
      </header>

      
     
      <div className="content">
        <div className="carousel">
        
        </div>
        <Switch>
          <Route path="/colors">
          <CarouselList/>
            <ColorsList />
          </Route>
          <Route path="/equipements">
          <CarouselList/>
            <EquipementsList/>
          </Route>
          <Route path="/accessoires">
          <CarouselList/>
            <AccessoiresList/>
          </Route>
          <Route path="/jantes">
          <CarouselList/>
            <JantesList/>
          </Route>
          <Route path="/scellerie">
          <CarouselList/>
            <ScellerieList/>
          </Route>
          <Route path="/Recapitulatif">
          <Recapitulatif/>
          </Route>
          <Route 
          path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;



function Home() {
  return (
    <div className="stylehomepage">
        <div className="homepage">
        <Carousel fade className="w-100">
  <Carousel.Item className="w-100">
  <video className=" w-100 videocars"loop autoPlay >
                    <source src="video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4" type="video/mp4"/>
                  </video>
    <Carousel.Caption>
      <h1>A110 L??GENDE GT 2021</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video className="w-100 videocars"  loop autoPlay >
                    <source src="video/210611_A110_X_FelipePantone_Main_Edit_45s-1680x951px.mp4" type="video/mp4"/>
                  </video>

    <Carousel.Caption>
      <h1>ALPINE X FELIPE PANTONE</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="d-flex -justify-content-center">
          <div className="col-sm-6 modeles">
            <h1>MOD??LES</h1>
            <p>VIVEZ L'EXP??RIENCE ALPINE<br></br>
              ?? VOTRE FA??ON
            </p>
          </div> 
          <div className="col-sm-6 homestyle">
            <img src="images/sources-homepage/versions/COMPO-LEGENDE.png"/>
          </div>
        </div>
        <div className="carsalpines">
          <p>Configurez votre Alpine selon vos pr??f??rences en s??lectionnant parmi l'ensemble des couleurs, ??quipements et accessoires propos??s.</p>
          <CarsList/>
        </div>
        <div className="creation">
          <div className="d-flex -justify-content-center align">
            <div className="col-sm-6 moteur">
              <h1>Moteur <br/> turbocompress??</h1>
              <p> 
              Avec une puissance maximale de 292 ch, l'A110S est le mod??le <br/> le plus puissant de la gamme A110. Le moteur quatre cylindres <br/> de 1,8 litre demeure, mais la pression de suralimentation du turbocompresseur est augment??e de 0,4 bar pour offrir de <br/>  meilleures performances. Coup?? deux places ?? moteur en position <br/>  centrale arri??re, l???A110S d??livre plaisir et sensations ?? toutes les allures.
              </p>
            </div> 
            <div className="col-sm-6 videomoteur">
              <video className="w-100"  loop autoPlay >
                <source src="video/MOTEUR_CINEMAGRAPH-.mov" type="video/mp4"/>
              </video>
            </div>
          </div>
          <div className="Technologie">
            <div className="d-flex -justify-content-center align">
              <div className="col-sm-6 videomoteur">
                <Carousel>
                  <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="images/sources-homepage/design/Visuel_3_desktop.jpg"
                        alt="First slide"/>
                    </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block w-100"
                      src="images/sources-homepage/design/Visuel_1_desktop.jpg"
                      alt="Second slide"/>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-sm-6 moteur">
                <h1>Ch??ssis Sport</h1>
                <p>
                Le r??glage du ch??ssis sport de l???A110S offre stabilit?? ?? haute vitesse et pr??cision de la tenue de route, faisant de l???A110S une voiture de sport affut??e. Les nouveaux ressorts h??lico??daux sont plus rigides de 50% et les amortisseurs ont ??t?? r??gl??s en cons??quence. Les barres anti-roulis - creuses pour minimiser le poids - sont plus fermes de 100%.
                </p>
              </div> 
            </div>
          </div>
          <div className="graviter mt-5 mb-5">
            <div className="backfrance mb-2"></div>
              <div className="d-flex justify-content-center">
                  <video className="videocars"  loop autoPlay >
                    <source src="video/Center-of-gravity-FR_LOW.mov" type="video/mp4"/>
                  </video>
              </div>
            </div>
          </div>
       
    
    <div>
      
    </div>
    </div> 
  )
}

  
