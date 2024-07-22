import React from 'react';
import ProfilesList from "../../blocks/profiles-list/profiles-list";
import cardList from '../../../mocks/cardList';
import BtnShowMore from '../../ui/buttons/btn-show-more/btn-show-more';
import Pagination from '../../blocks/pagination/pagination';
import Filters from '../../blocks/filters/filters';
import "./catalog.module.scss"


function Catalog(): JSX.Element {
    return (
      <>
        <div className="catalog__wrapper">
          <div className="catalog__filters">
            <Filters />
          </div>
          <div className="catalog__inner-wrapper">
            <ProfilesList cardsData={cardList} />
            <div className="catalog__show-more">
              <BtnShowMore />
            </div>
            <Pagination />
          </div>
        </div>
      </>
    );
  }
  
  export default Catalog;
