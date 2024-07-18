import React from 'react';
import ProfilesList from "../../blocks/profiles-list/profiles-list";
import cardList from '../../../mocks/cardList';
import BtnShowMore from '../../ui/buttons/btn-show-more/btn-show-more';
import Pagination from '../../blocks/pagination/pagination';
import "./catalog.module.scss"


function Catalog(): JSX.Element {
    return (
      <>
        <div className="catalog__wrapper">
          <ProfilesList cards={cardList} />
          <div className="catalog__show-more">
            <BtnShowMore />
          </div>
          <Pagination />
        </div>
      </>
    );
  }
  
  export default Catalog;
