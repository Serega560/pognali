import React from 'react';
import { CountryData } from '../../types/country-data';
import './country-item.module.scss';

type CountryItemProps = {
  countryData: CountryData;
};

function CountryItem({countryData}: CountryItemProps): JSX.Element {
  const {country, flag} = countryData;

  return (
    <li className="country__item">
      <picture className="country__flag">
        <img
          src={flag}
          className=""
          width={70}
          height={47}
          alt="Флаг страны"
        />
      </picture>

      <div className="country__name">
        <b>{country}</b>
      </div>
    </li>
  );
}

export default CountryItem;