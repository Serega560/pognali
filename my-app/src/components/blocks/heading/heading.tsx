import React from 'react';
import './heading.module.scss'

function Heading() {
    return (
        <div className="heading">
            <div className="heading__container container">
                <div className="heading__wrapper">
                    <div className="heading__name">
                        <h1>Направления</h1>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Heading;