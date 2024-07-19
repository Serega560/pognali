import React from 'react';
import { CardData } from '../../types/card-data';

import CardProfile from "../../ui/card-profile/card-profile";
import './profiles-list.module.scss'

type CardsProfileProps = {
  cardsData: CardData[] | null;
};

function ProfilesList({cardsData}: CardsProfileProps): JSX.Element {
    return (
      <section className="profiles-list">
        {cardsData?.length ? (
          <>
            <ul className="profiles-list__list">
              {cardsData?.map((cardData) => <CardProfile cardData={cardData} key={cardData.id} />)}
            </ul>
          </>
        ) : null}
      </section>
    );
  }
  
export default ProfilesList;