import React, { useState } from 'react';
import ContinentSorting from '../сontinent-sorting/сontinent-sorting';
import CountrySorting from '../country-sorting/country-sorting';
import './country-continent-sorting.module.scss';

function CountryContinentSorting(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false); // состояние для разворачивания/сворачивания

  return (
    <div className="country-continent-sorting container">
      <div className="country-continent-sorting__wrapper">
        <ContinentSorting />

        <div className="country-continent-sorting__toggle-button-wrapper">
          <button className="country-continent-sorting__toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
            <span className={`country-continent-sorting__toggle-button-icon ${isExpanded ? 'close' : 'open'}`}></span>
            {isExpanded ? 'свернуть' : 'показать все'}
          </button>
        </div>
        
        {isExpanded && <CountrySorting />}
      </div>
    </div>
  );
}

export default CountryContinentSorting;

