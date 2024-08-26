import React from 'react';
import MiniPlan from "../miniplan/miniplan";
import { ReactComponent as NextStep } from '../../../assets/img/nextstep.svg';
import { letterArray } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { addChoosenCountries, setActiveStep, setIsSelectCountryInputActive, setLetter } from '../../../store/app-slice';
import { useGetCountriesNamesQuery } from '../../../store/countries-api';
import { Country } from '../../../types';
import { SelectedCountryInput } from '../selected-coutry-input/selected-country-input';
import { ReactComponent as Plus } from '../../../assets/img/plusbutton.svg'

function Route(): JSX.Element {
  const dispatch = useAppDispatch();
  const choosenLetter = useAppSelector(state => state.appSlice.choosenLetter); //здесь выбранная буква
  const { data: filteredCountries, isLoading } = useGetCountriesNamesQuery(choosenLetter); //filteredCountries это массив объектов со странами по выбранной букве
  const selectedCountries = useAppSelector(state => state.appSlice.choosenCountries); //выбранные страны
  const handleCountryClick = (country: Country): void => {
    dispatch(addChoosenCountries(country));
    dispatch(setIsSelectCountryInputActive());
  }

  return (
    <div className="route" id="route">
      <div className="route__header">
        <div className="route__heading">
          <h3 className="route__title">Шаг 2. Маршрут</h3>
          <p className="route__notion">
            Укажите страны, которые вы хотели бы посетить.<br />Это может быть одна или сразу несколько.</p>
        </div>
        <MiniPlan />
      </div>

      <ul className='route__list'>
        {selectedCountries.length > 0 ? selectedCountries.map((selectedCountry) => {
          return (
            <SelectedCountryInput selectedCountry={selectedCountry} />
          );
        }) : ''}
        {selectedCountries.length > 3 ? '' : <li className='route__item'>
          <h3 onClick={(evt) => evt.currentTarget.closest('li')?.classList.toggle('active')}>
            <p className="route__add-country">Добавить страну</p>
            <p className="route__choose-country">Выберите страну</p>
            <button className="route__btn-plus"><Plus/></button>
            <button className="route__btn-arrow"><Plus/></button>
          </h3>
          <div className='route__countries-wrapper'>
            <ul className="route__letters-list">
              {/* отрисовываем буквы */}
              {letterArray.map((letter: string, index: number) => {
                return (
                   <li className="route__letter-item" key={index}>
                     <button className={`route__letter-button ${choosenLetter === letter ? 'active' : ''}`}
                             type="button"
                             onClick={() => dispatch(setLetter(letter))}>{letter}
                     </button>
                   </li>
                )
              })}
            </ul>
            {/* отрисовываем названия стран */}
            <ul className="route__counties-list">
              {isLoading && <div>Loading...</div>}
              {filteredCountries?.map((country: Country) => {
                return (
                   <li className="route__counties-item counties" key={country.name}
                       onClick={(evt) => {
                         handleCountryClick(country);
                         evt.currentTarget.closest('.route__item')?.classList.remove('active');
                       }}
                   >{country.name}</li>
                )
              })}
            </ul>
          </div>
        </li>}

      </ul>

      <div className="group-btn">
<<<<<<< HEAD
        <a className="route-btn" href="#entertainment"
           // onClick={() => setDataToPostCountries()}
        >
=======
        <a className="route-btn" href="#entertainment" onClick={() => dispatch(setActiveStep('activities'))}>
>>>>>>> master
          <span>Следующий шаг</span>
          <NextStep/>
        </a>
<<<<<<< HEAD
        <a href="#dates" className="route-btn btn-back">
          <NextStep/>
=======
        <a href="#dates" className="route-btn btn-back" onClick={() => dispatch(setActiveStep('dates'))}>
          <NextStep />
>>>>>>> master
          <span>На шаг назад</span>
        </a>
      </div>
    </div>
  );
}
export default Route;
