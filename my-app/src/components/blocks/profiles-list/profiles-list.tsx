import React from 'react';
import { Card } from '../../types/card';

import CardProfile from "../../ui/card-profile/card-profile";
import './profiles-list.module.scss'

type CardsProfileProps = {
  cards: Card[] | null;
};

function ProfilesList({cards}: CardsProfileProps): JSX.Element {
    return (
      <section className="profiles-list">
        {cards?.length ? (
          <>
            <ul className="profiles-list__list">
              {cards?.map((card) => <CardProfile card={card} key={card.id} />)}
            </ul>
          </>
        ) : null}
      </section>
    );
  }
  
export default ProfilesList;