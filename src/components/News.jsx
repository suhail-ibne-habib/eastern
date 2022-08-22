import React from 'react';
import Slider from "react-slick";

import './News.css';
import EventImg from '../assets/Event_image_Clubcarnival2022heldsatEasternUniversity07082022Header.webp';

function News(){

    const setting = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
    }

    return(
        <Slider {...setting}>
            <div className="news">
                <div className="news-thumb">
                    <img src={EventImg} alt="" />
                </div>
                <h2 className="news-title">Fresher’s Orientation-Summer 2022 Held at Eastern University</h2>
                <h3 className="date">22 Jul 2022</h3>
            </div>
            <div className="news">
                <div className="news-thumb">
                    <img src={EventImg} alt="" />
                </div>
                <h2 className="news-title">Fresher’s Orientation-Summer 2022 Held at Eastern University</h2>
                <h3 className="date">22 Jul 2022</h3>
            </div>
        </Slider>
    )
}

export default News;