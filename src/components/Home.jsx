import React from 'react';
import Colaboration from './Colaboration';
import Faculties from './Faculties';
import PhotoGallery from './PhotoGallery';
import Testimonials from './Testimonials';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Notice from './Tabs';
import Hero from './Hero';

function Home(){
    return(
        <>
            <Hero />
            <Notice />
            <Faculties />
            <Testimonials />
            <PhotoGallery />
            <Colaboration />
        </>
    )
}

export default Home;