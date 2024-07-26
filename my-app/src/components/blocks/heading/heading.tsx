import React from 'react';
import './heading.module.scss'

type HeadingProps = {
    heading: string
}

function Heading({heading}: HeadingProps) {
    return (
        <div className="heading">
            <div className="heading__container container">
                <div className="heading__wrapper">
                    <div className="heading__name">
                        <h1>{heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Heading;