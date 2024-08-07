import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { letterArray } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setLetter } from '../../../store/app-slice';
import { useGetCountriesNamesQuery } from '../../../store/countries-api';
import { Country } from '../../../types';
import './country-sorting.module.scss';

function CountrySorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const choosenLetter = useAppSelector(state => state.appSlice.choosenLetter);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  // Используем хук для получения стран только для мобильных и планшетов
  const { data: filteredCountries, isLoading: isLoadingFiltered } = useGetCountriesNamesQuery(choosenLetter);

  // Используем другой подход для получения всех стран для десктопа
  const { data: allCountries, isLoading: isLoadingAll } = useGetCountriesNamesQuery(''); // Используем пустую строку для получения всех стран

  // Функция для группировки стран по первой букве
  const groupCountriesByLetter = (countries: Country[] | undefined) => {
    const grouped: { [key: string]: Country[] } = {};
    countries?.forEach(country => {
      const firstLetter = country.name.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(country);
    });
    return grouped;
  };

  const groupedCountries = groupCountriesByLetter(allCountries);

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
              {filteredCountries?.map((country: Country) => (
                <li className="country-sorting__counties-item" key={country.name}>
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
                {groupedCountries[letter]?.map((country: Country) => (
                  <li className="country-sorting__counties-item" key={country.name}>
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
