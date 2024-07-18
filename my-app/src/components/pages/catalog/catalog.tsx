import React from 'react';
import ProfilesList from "../../blocks/profiles-list/profiles-list";
import cardList from '../../../mocks/cardList';
import "./catalog.module.scss"


function Catalog(): JSX.Element {
    return (
      <>
        <ProfilesList cards={cardList} />
      </>
    );
  }
  
  export default Catalog;
