import React from 'react';
import MiniPlan from "../miniplan/miniplan";
import { ReactComponent as NextStep } from '../../../assets/img/nextstep.svg';
import { letterArray } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { addChoosenCountries, setIsSelectCountryInputActive, setLetter } from '../../../store/app-slice';
import { useGetCountriesNamesQuery } from '../../../store/countries-api';
import { Country } from '../../../types';
import { SelectedCountryInput } from '../selected-coutry-input/selected-country-input';

// type CountriesItemProps = {
//   countriesData: CountryData[] | null;
// };

// type CountriesItemProps = {
//   countriesData: CountryData[] | null;
// };
// { countriesData }: CountriesItemProps

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
          <p className="route__notion">Укажите страны, которые вы хотели бы посетить. Это может быть одна или
            сразу несколько.</p>
        </div>
        <MiniPlan />
      </div>
      <div>
        <ul className='route__list'>
          <li className='route__item'>
          {/* {selectedCountries.length > 0 ? selectedCountries.map((selectedCountry) => {
            return (
              <SelectedCountryInput selectedCountry={selectedCountry}/>
            );
          }) : ''} */}
            <h3>
              Выберите страну
            </h3>
            {/* отрисовываем буквы */}
            <ul className="route__letters-list">
              {letterArray.map((letter: string, index: number) => {
                return (
                  <li className="step__letter-item" key={index}>
                    <button className={`step__letter-button ${choosenLetter === letter ? 'active' : ''}`}
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
                  onClick={() => handleCountryClick(country)}
                  >{country.name}</li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div className="group-btn">
        <a className="route-btn" href="#entertainment">
          <span>Следующий шаг</span>
          <NextStep />
        </a>
        <a href="#dates" className="route-btn btn-back">
          <NextStep />
          <span>На шаг назад</span>
        </a>
      </div>
    </div>
  );
}

// function Route({ countriesData }: CountriesItemProps): JSX.Element {


//   return (
//     <section className="route">
//       <div className="route__header">
//         <h2 className="route__title">
//           Шаг 2. Маршрут
//         </h2>
//         <p className="route__notion">
//           Укажите страны, которые вы хотели бы посетить. Это может быть одна или сразу несколько.
//         </p>
//         <MiniPlan />
//       </div>
//       <ul className="route__counties-list">
//         <li className="route__counties-item counties">
//           {countriesData?.length ? (
//             <>
//               <ul className="counties__list">
//                 {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
//               </ul>
//             </>
//           ) : null}
//         </li>
//         <li className="route__counties-item">
//           {countriesData?.length ? (
//             <>
//               <ul className="">
//                 {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
//               </ul>
//             </>
//           ) : null}
//         </li>
//         <li className="route__counties-item">
//           {countriesData?.length ? (
//             <>
//               <ul className="">
//                 {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
//               </ul>
//             </>
//           ) : null}
//         </li>
//         <li className="route__counties-item">
//           {countriesData?.length ? (
//             <>
//               <ul className="">
//                 {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
//               </ul>
//             </>
//           ) : null}
//         </li>
//       </ul>
//       <div>
//         <p>
//           Добавить страну
//         </p>
//       </div>
//       <a href="#">
//         <span>Следующий шаг</span>
//         <NextStep />
//       </a>
//       <a href="#">
//         <span>Предыдущий шаг</span>
//         <NextStep />
//       </a>
//     </section>
//   );
// }


export default Route;
