import React from 'react';
import Heading from '../../blocks/heading/heading';
import ProfilesList from "../../blocks/profiles-list/profiles-list";
import cardList from '../../../mocks/cardList';
import BtnShowMore from '../../ui/buttons/btn-show-more/btn-show-more';
import Pagination from '../../blocks/pagination/pagination';
import Filters from '../../blocks/filters/filters';
import CountrySorting from '../../blocks/country-sorting/country-sorting';
import "./catalog.module.scss"


function Catalog(): JSX.Element {
    return (
      <section className="catalog">
        <Heading heading={"попутчики"}/>
        <CountrySorting />
        <div className="catalog__wrapper container">
          <section className="catalog__filters">
            <Filters />
          </section>
          <section className="catalog__inner-wrapper">
            <ProfilesList cardsData={cardList} />
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
