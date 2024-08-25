import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { letterArray } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setCountryToSearchCopmanions, setLetter } from '../../../store/app-slice';
import { useGetCountriesNamesQuery } from '../../../store/countries-api';
import { Country } from '../../../types';
import './country-sorting.module.scss';

function CountrySorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const choosenLetter = useAppSelector(state => state.appSlice.choosenLetter);
  const choosenContinents = useAppSelector(state => state.appSlice.choosenContinent);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const { data: filteredCountries, isLoading: isLoadingFiltered } = useGetCountriesNamesQuery(choosenLetter);

  const { data: allCountries, isLoading: isLoadingAll, isSuccess } = useGetCountriesNamesQuery('');

  const countriesFilteredByContinent = (countries: Country[]): Country[] => {
    if (choosenContinents.length === 0) {
      return countries;
    } else {
      return (choosenContinents.map((cont) => {
        return countries?.filter((country: Country) => country.continent === cont);
      })).flat();
    }
  } 

  const groupCountriesByLetter = (countries: Country[] | undefined) => {
    const grouped: { [key: string]: Country[] } = {};
    countries?.forEach(country => {
      const firstLetter = country?.name.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(country);
    });
    return grouped;
  };

  const groupedCountries = groupCountriesByLetter(countriesFilteredByContinent(allCountries));

  return (
    <div className="country-sorting">
      {isTabletOrMobile ? (
        <div className="country-sorting__tablet">
          <div className="country-sorting__inner-wrapper">
            <ul className="country-sorting__letters-list">
              {letterArray.map((letter: string, index: number) => (
                <li className="country-sorting__letter-item" key={index}>
                  <button
                    className={`country-sorting__letter-button ${choosenLetter === letter ? 'active' : ''}`}
                    type="button"
                    onClick={() => dispatch(setLetter(letter))}
                  >
                    {letter}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="country-sorting__counties-list">
              {isLoadingFiltered && <div>Loading...</div>}
              {countriesFilteredByContinent(filteredCountries).map((country: Country) => (
                <li className="country-sorting__counties-item"
                  key={country.name}
                  onClick={() => dispatch(setCountryToSearchCopmanions(country.name))}>
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="country-sorting__desktop">
          {letterArray.map((letter: string, index: number) => (
            <div key={index} className="country-sorting__group">
              <h3 className="country-sorting__letter-title">{letter}</h3>
              <ul className="country-sorting__counties-list">
                {isLoadingAll && <div>Loading...</div>}
                {isSuccess && groupedCountries[letter]?.map((country: Country) => (
                  <li className="country-sorting__counties-item"
                    key={country.name}
                    onClick={() => dispatch(setCountryToSearchCopmanions(country.name))}>
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountrySorting;
