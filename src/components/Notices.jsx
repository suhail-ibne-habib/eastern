import React, {useState} from 'react';

import SingleNotice from './SingleNotice';

function Notices(props){

    return(
        props.source.map( (s, idx) => {
            return <SingleNotice key={s.id} date={s.date} year={s.year} title={s.title}/>
        } )
    )
    
}

export default Notices;