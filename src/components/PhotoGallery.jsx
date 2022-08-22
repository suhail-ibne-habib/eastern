import React from 'react';

import Gallery from '../gallery';

import './PhotoGallery.css';

function PhotoGallery(){
    return(
        <section>
            <div className="container">
                <h1 className="section-title left">Photo Gallery</h1>
                <div className="galleries">

                    {Gallery.map( ( gal, idx ) => {

                        return(
                            <div className="gallery">
                                <div className="thumb">
                                    <img src={gal.img} alt="" />
                                </div>
                                <div className="title">
                                    <h2>{gal.title}</h2>
                                </div>
                            </div>
                        )

                    } )}

                </div>

            </div>
        </section>
    )
}

export default PhotoGallery;