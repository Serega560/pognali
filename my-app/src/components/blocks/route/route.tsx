import React from 'react';
import { CountryData } from '../../types/country-data';
import CountryItem from "../../ui/country-item/country-item";


//



type CountriesItemProps = {
  countriesData: CountryData[] | null;
};

function Route({ countriesData }: CountriesItemProps): JSX.Element {
  return (
    <section className="route">
      <div className="route__header">
        <h2 className="route__title">
          Шаг 2. Маршрут
        </h2>
        <p className="route__notion">
          Укажите страны, которые вы хотели бы посетить. Это может быть одна или сразу несколько.
        </p>
      </div>
      <ul className="rout__options-list">
        <li className="rout__options-item">даты</li>
        <li className="rout__options-item">маршрут</li>
        <li className="rout__options-item">развлечения</li>
      </ul>
      <ul className="route__counties-list">
        <li className="route__counties-item counties">
          {countriesData?.length ? (
            <>
              <ul className="counties__list">
                {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
              </ul>
            </>
          ) : null}
        </li>
        <li className="route__counties-item">
          {countriesData?.length ? (
            <>
              <ul className="">
                {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
              </ul>
            </>
          ) : null}
        </li>
        <li className="route__counties-item">
          {countriesData?.length ? (
            <>
              <ul className="">
                {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
              </ul>
            </>
          ) : null}
        </li>
        <li className="route__counties-item">
          {countriesData?.length ? (
            <>
              <ul className="">
                {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
              </ul>
            </>
          ) : null}
        </li>
      </ul>
      <div>
        <p>
          Добавить страну
        </p>
      </div>
    </section>
  );
}


export default Route;
