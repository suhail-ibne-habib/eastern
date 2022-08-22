import React, {useState} from 'react';

import notices from '../notices';
import events from '../event';

import './Tabs.css';
import News from './News';
import Notices from './Notices';

function Notice(){

    const [activeTab, setActiveTab] = useState( 'notice' );

    const clickDetector = (e)=>{
        setActiveTab(e.currentTarget.id);
    }

    return(
        <section>
            <div className="container">
                <div className="notice">
                    <div className="left">
                        <h1 className="section-title left">News</h1>
                        <News />
                    </div>
                    <div className="right">
                        <div className="tabs">
                            <h2 onClick={clickDetector} id="notice" className={ ( activeTab === 'notice' ) ? 'tab active' : 'tab' }>General notice</h2>
                            <h2 onClick={clickDetector}  id="event" className={ ( activeTab === 'event' ) ? 'tab active' : 'tab' }>Upcoming Event</h2>
                        </div>
                        <div className="notices-wrapper">
                            {
                                ( activeTab === 'notice' ) ? <Notices source={notices} /> : <Notices source={events} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notice;