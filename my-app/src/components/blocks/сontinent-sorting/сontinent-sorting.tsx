import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setContinent } from '../../../store/app-slice';
import './сontinent-sorting.module.scss';
import {ReactComponent as Filter} from '../../../assets/img/filter.svg'

const continents = ['Европа', 'Азия', 'Америка', 'Острова'];

function ContinentSorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const choosenContinent = useAppSelector(state => state.appSlice.choosenContinent); // выбранный континент

  return (
    <div className="continent-sorting">
      <div className="continent-sorting__badge">
        <Filter />
        <span>Фильтрация по странам:</span>
      </div>
      
      {/* список стран */}
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
  