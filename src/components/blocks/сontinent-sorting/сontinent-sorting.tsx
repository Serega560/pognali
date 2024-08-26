import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setContinent } from '../../../store/app-slice';
import './сontinent-sorting.module.scss';
import {ReactComponent as Filter} from '../../../assets/img/filter.svg'
import { CONTINENTS } from '../../../const';
import { ContinentsEng } from '../../../types';



function ContinentSorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const choosenContinents = useAppSelector(state => state.appSlice.choosenContinent);

  return (
    <div className="continent-sorting">
      <div className="continent-sorting__badge">
        <Filter />
        <span>Фильтрация по странам:</span>
      </div>
      
      <ul className="continent-sorting__list">
        {CONTINENTS.map((continent, index) => (
          <li className="continent-sorting__item" key={index}>
            <button
              className={`continent-sorting__button ${choosenContinents.includes((Object.keys(continent).toString()) as ContinentsEng) ? 'active' : ''}`}
              type="button"
              onClick={() => dispatch(setContinent(Object.keys(continent).toString() as ContinentsEng))}
            >
              {Object.values(continent).toString()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContinentSorting;
  