import React from 'react';
import Heading from '../../blocks/heading/heading';
import ProfilesList from "../../blocks/profiles-list/profiles-list";
import BtnShowMore from '../../ui/buttons/btn-show-more/btn-show-more';
import Pagination from '../../blocks/pagination/pagination';
import Filters from '../../blocks/filters/filters';
import CountryContinentSorting from '../../blocks/country-continent-sorting/country-continent-sorting';
import "./catalog.module.scss"
import { useGetCatalogQuery, useGetPaginationQuery } from '../../../store/catalog-api';
import { useAppSelector } from '../../../hooks/hooks';
import { CardData } from '../../types/card-data';


function Catalog(): JSX.Element {
  const currentLimit = useAppSelector((state) => state.appSlice.currentLimit);
  const currentPage = useAppSelector((state) => state.appSlice.currentPage);
  const choosenContinents = useAppSelector((state) => state.appSlice.choosenContinent);
  const countryToSearchCompanions = useAppSelector((state) => state.appSlice.countryToSearchCompanions)
  const { data: paginationData, isSuccess } = useGetPaginationQuery({ page: currentPage, limit: currentLimit });

  const filterCardsByCountry = (data: CardData[]): CardData[] => {
    if (countryToSearchCompanions === '') {
      return data;
    } else {
      return data.filter((card) => card.country.some((country) => country.name === countryToSearchCompanions));
    }
    
  }
  
  return (
    <section className="catalog">
      <Heading heading={"попутчики"} />
      <CountryContinentSorting />
      <div className="catalog__wrapper container">
        <section className="catalog__filters">
          <Filters />
        </section>
        <section className="catalog__inner-wrapper">
          {isSuccess ? <ProfilesList cardsData={filterCardsByCountry(paginationData.data).map((profile): CardData => {
            return { ...profile, image: "https://loremflickr.com/320/240/cat" }
          })} /> : <div>Loading...</div>}
          <div className="catalog__show-more">
            <BtnShowMore />
          </div>
          <Pagination />
        </section>
      </div>
    </section>
  );
}

export default Catalog;

