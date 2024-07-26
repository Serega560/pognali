import React, { useState } from 'react';
import ContinentSorting from '../сontinent-sorting/сontinent-sorting';
import CountrySorting from '../country-sorting/country-sorting';
import './country-continent-sorting.module.scss';

function CountryContinentSorting(): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false); // состояние для разворачивания/сворачивания
  
    return (
      <div className="country-continent-sorting">
        <ContinentSorting />
        <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'СВЕРНУТЬ' : 'ФИЛЬТРАЦИЯ ПО СТРАНАМ'}
        </button>
        {isExpanded && <CountrySorting />}
      </div>
    );
  }
  
  export default CountryContinentSorting;

