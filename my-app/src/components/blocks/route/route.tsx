import React from 'react';
import { CountryData } from '../../types/country-data';
import CountryItem from "../../ui/country-item/country-item";
import MiniPlan from "../miniplan/miniplan";
import { ReactComponent as NextStep } from '../../../assets/img/nextstep.svg';

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
        <MiniPlan />
      </div>
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
      <div className="group-btn">
                <button className="route-btn" type="button">
                    <span>Следующий шаг</span>
                    <NextStep/>
                </button>
                <button className="route-btn" type="button">
                    <NextStep/>
                    <span>На шаг назад</span>
                </button>
            </div>
    </section>
  );
}


export default Route;
