import React from 'react';
import Slider from "react-slick";

import './News.css';

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
                    <img src="http://easternuni.edu.bd/assets/Event_image%2FClubcarnival2022heldsatEasternUniversity07082022Header.webp" alt="" />
                </div>
                <h2 className="news-title">Fresher’s Orientation-Summer 2022 Held at Eastern University</h2>
                <h3 className="date">22 Jul 2022</h3>
            </div>
            <div className="news">
                <div className="news-thumb">
                    <img src="http://easternuni.edu.bd/assets/Event_image%2FClubcarnival2022heldsatEasternUniversity07082022Header.webp" alt="" />
                </div>
                <h2 className="news-title">Fresher’s Orientation-Summer 2022 Held at Eastern University</h2>
                <h3 className="date">22 Jul 2022</h3>
            </div>
        </Slider>
    )
}

export default News;