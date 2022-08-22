import React, {useRef} from 'react';
import Slider from "react-slick";

import './Testimonials.css';

import thumb1 from '../assets/Yousuf_Al_Azad.jpg';
import thumb2 from '../assets/MasumaDilAfrozLaw.jpg';

function Testimonials(){

    const sliderRef = useRef();

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    }

    const handleLeftArrowClick = ()=>{
        sliderRef.current.slickPrev();
    }

    const handleRightArrowClick = ()=>{
        sliderRef.current.slickNext();
    }

    return(
        <section>
            <h1 className="section-title">Testimonials</h1>
            <div className="container">
                <div id="testimonials" className="testimonials">
                    <Slider ref={sliderRef} {...settings}>
                        <div className="testimonial">

                            <div className="testimonial--thumb">
                                <img src={thumb1} alt="Yousuf_Al_Azad.jpg" />
                            </div>
                            <h2 className="testimonial--title">Yousuf Al Azad</h2>
                            <h3 className="batch">Batch: 2014</h3>
                            <h3 className="department">Department of CSE</h3>
                            <h3 className="current-role">Current Role: Managing Director at Azoncode Ltd.</h3>
                            <p className="info">I currently work in a software company as a Managing Director. I’m managing all company task from start to finish. My regular job is distributing task to concern department and follow-up there task. I love to work in team.</p>

                        </div>
                        <div className="testimonial">

                            <div className="testimonial--thumb">
                                <img src={thumb2} alt="Masuma Dil Afroz" />
                            </div>
                            <h2 className="testimonial--title">Masuma Dil Afroz</h2>
                            <h3 className="batch">Batch: 2014</h3>
                            <h3 className="department">Department of CSE</h3>
                            <h3 className="current-role">Current Role: Managing Director at Azoncode Ltd.</h3>
                            <p className="info">I currently work in a software company as a Managing Director. I’m managing all company task from start to finish. My regular job is distributing task to concern department and follow-up there task. I love to work in team.</p>

                        </div>
                    </Slider>
                    <div className="controls">
                        <div onClick={handleLeftArrowClick}><i className="fa-solid fa-arrow-left ctrl"></i></div>
                        <div onClick={handleRightArrowClick}><i className="fa-solid fa-arrow-right ctrl"></i></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;