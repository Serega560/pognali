import React from 'react';
import { CountryData } from '../../types/country-data';
import CountryItem from "../../ui/country-item/country-item";
import MiniPlan from "../miniplan/miniplan";
import { ReactComponent as NextStep } from '../../../assets/img/nextstep.svg';
import { letterArray } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setLetter } from '../../../store/app-slice';
import { useGetCountriesNamesQuery } from '../../../store/countries-api';
import { Country } from '../../../types';

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
    return (
        <div className="route">
            <div className="route__header">
                <div className="route__heading">
                    <h3 className="route__title">Шаг 2. Маршрут</h3>
                    <p className="route__notion">Укажите страны, которые вы хотели бы посетить. Это может быть одна или
                        сразу несколько.</p>
                </div>
                <MiniPlan />
            </div>
            {/*<ul className="route__counties-list">*/}
            {/*  <li className="route__counties-item counties">*/}
            {/*    {countriesData?.length ? (*/}
            {/*      <>*/}
            {/*        <ul className="counties__list">*/}
            {/*          {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}*/}
            {/*        </ul>*/}
            {/*      </>*/}
            {/*    ) : null}*/}
            {/*  </li>*/}
            {/*  <li className="route__counties-item">*/}
            {/*    {countriesData?.length ? (*/}
            {/*      <>*/}
            {/*        <ul className="">*/}
            {/*          {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}*/}
            {/*        </ul>*/}
            {/*      </>*/}
            {/*    ) : null}*/}
            {/*  </li>*/}
            {/*  <li className="route__counties-item">*/}
            {/*    {countriesData?.length ? (*/}
            {/*      <>*/}
            {/*        <ul className="">*/}
            {/*          {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}*/}
            {/*        </ul>*/}
            {/*      </>*/}
            {/*    ) : null}*/}
            {/*  </li>*/}
            {/*  <li className="route__counties-item">*/}
            {/*    {countriesData?.length ? (*/}
            {/*      <>*/}
            {/*        <ul className="">*/}
            {/*          {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}*/}
            {/*        </ul>*/}
            {/*      </>*/}
            {/*    ) : null}*/}
            {/*  </li>*/}
            {/*</ul>*/}
            <div>
                <p>
                    Добавить страну
                </p>
                {/* отрисовываем буквы */}
                <ul className="route__letters-list">
                    {letterArray.map((letter: string, index: number) => {
                        return (
                            <li className="step__letter-item" key={index}>
                                <button className={`step__letter-button ${choosenLetter === letter ? 'active' : ''}`} type="button"
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
                            <li className="route__counties-item counties" key={country.name}>{country.name}</li>
                        )
                    })}
                </ul>
            </div>
            <a href="#">
                <span>Следующий шаг</span>
                <NextStep />
            </a>

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
