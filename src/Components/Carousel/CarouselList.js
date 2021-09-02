import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';

const mapStateToProps = state => {
  
    return { 
      picturesCarousel:state.picturesCarousel
    };
  };

 
  const CarouselListConnect = ({ picturesCarousel}) => {
    const displayCarousel = () => {
      return Object.keys(picturesCarousel).map(key => { 
          return (
            <Carousel.Item>
            <div className="d-flex justify-content-center">
            <img className="d-block w-75" src={picturesCarousel[key]}/>      
          </div>
          </Carousel.Item>
          )
      });
    }


      return (  
     
           <Carousel className=''>
             {displayCarousel() }
           </Carousel>

      );
    }


const CarouselList= connect(mapStateToProps)(CarouselListConnect)
export default CarouselList;
