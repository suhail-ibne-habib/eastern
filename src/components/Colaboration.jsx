import React from 'react';

import partner from '../partner';

import './Colaboration.css';

function Colaboration(){
    return(
        <section>
            <h1 className="section-title">International Colaborations</h1>
            <div className="partners-wrap">
                <div className="container">
                    <ul className="partners">
                        {
                            partner.map( (p, idx) => {
                                return(
                                    <li key={idx} className="partner">
                                        <a href={p.url} target="blank">
                                            <img src={p.img} alt="Worcester.jpg" />
                                        </a>
                                    </li>
                                ) 
                            } )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Colaboration;