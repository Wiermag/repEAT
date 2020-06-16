import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

import "./EventsCarousel.css";

const EventsCarousel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (e) => {
        setIndex(e);
  };

  return (
    <>
    <h2 className="title-carousel">FOOD FESTIVALS:</h2>
    <Carousel activeIndex={index} onSelect={handleSelect}>
   
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/reduce-festival.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/food-festival.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/green-festival.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
};
    
export {
    EventsCarousel
}