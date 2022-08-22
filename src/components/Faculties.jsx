import React from 'react';

import './Faculties.css';

import faculties from '../faculty';

function Faculties(){

    return(
        <section>
            <div className="container">
                <h1 className="section-title left">Faculties</h1>
                <div className='faculties'>
                    {
                        faculties.map( (faculty, idx) => {
                            return (
                                <div key="idx" className="faculty">
                                    <div className="faculty-thumb">
                                        <img src={faculty.img} alt="" />
                                    </div>
                                    <div className="faculty-title">
                                        <h1>{faculty.title}</h1>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </section>
    )
}

export default Faculties;