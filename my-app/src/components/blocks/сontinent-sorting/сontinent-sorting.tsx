import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setContinent } from '../../../store/app-slice';
import './сontinent-sorting.module.scss';

const continents = ['Европа', 'Азия', 'Америка', 'Острова'];

function ContinentSorting(): JSX.Element {
    const dispatch = useAppDispatch();
    const choosenContinent = useAppSelector(state => state.appSlice.choosenContinent); // выбранный континент
  
    return (
      <div className="continent-sorting">
        <ul className="continent-sorting__list">
          {continents.map((continent, index) => (
            <li className="continent-sorting__item" key={index}>
              <button
                className={`continent-sorting__button ${choosenContinent === continent ? 'active' : ''}`}
                type="button"
                onClick={() => dispatch(setContinent(continent))}
              >
                {continent}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ContinentSorting;
  