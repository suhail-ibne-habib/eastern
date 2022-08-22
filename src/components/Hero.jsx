import React from 'react';

import Slider from 'react-slick';

import './Hero.css';

import Slider1 from '../assets/hero/3D_Permanent_Campus.webp';
import Slider2 from '../assets/hero/Campus+Bus(1200x450).webp';
import Slider3 from '../assets/hero/Admission_Fair_Summer_WebSlide.webp';

function Hero(){
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    } 

    return(
        <section id='hero'>

            <Slider {...settings}>
                <div className="slide">
                    <img src={Slider1} alt="" />
                </div>
                <div className="slide">
                    <img src={Slider2} alt="" />
                </div>
                <div className="slide">
                    <img src={Slider3} alt="" />
                </div>
            </Slider>
            
        </section>
    );
}

export default Hero;