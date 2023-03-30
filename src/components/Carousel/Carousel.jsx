import React from 'react'
import Slider from 'react-slick';
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({children}) => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
      };
      return (
        <Slider {...settings} className='margins'>
          {children}
        </Slider>
      );
}

export default Carousel