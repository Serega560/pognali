import React from 'react';
import { CountryData } from '../../types/country-data';
import CountryItem from "../../ui/country-item/country-item";


  type CountriesItemProps = {
    countriesData: CountryData[] | null;
  };

  function Routers({ countriesData }: CountriesItemProps): JSX.Element {
    return (
      <section className="">
        {countriesData?.length ? (
          <>
            <ul className="">
              {countriesData?.map((countryData) => <CountryItem countryData={countryData} />)}
            </ul>
          </>
        ) : null}
      </section>
    );
  }


export default Routers;
