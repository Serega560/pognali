import React from 'react';
import { CountryData } from '../../types/country-data';
import './country-item.module.scss';
// import Level from '../level/level';


type CountryItemProps = {
  countryData: CountryData;
};

function CountryItem({countryData}: CountryItemProps): JSX.Element {
  const {country, flag} = countryData;

  return (
    <div className="">
      <picture className="">
        <img
          src={flag}
          className=""
          width={70}
          height={47}
          alt="Флаг страны"
        />
      </picture>

      <div className="">
        <b>{country}</b>
      </div>
    </div>
  );
}

export default CountryItem;