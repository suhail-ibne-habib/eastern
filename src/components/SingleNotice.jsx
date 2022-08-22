import React from 'react';

import './SingleNotice.css';

function SingleNotice(props){
    return(
        <div className="notice-wrapper">
            <div className="notice-date-wrapper">
                <h2 className="date">{props.date}</h2>
                <h3 className="month">{props.year} </h3>
            </div>
            <div className="notice-description-wrapper">
                <h2 className="title">{props.title}</h2>
            </div>
        </div>
    )
}

export default SingleNotice;