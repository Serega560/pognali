import React from 'react';
import { Card } from '../../types/card';
import './card-profile.module.scss';
// import Level from '../level/level';


type CardProfileProps = {
  card: Card;
};

function CardProfile({card}: CardProfileProps): JSX.Element {
  const {name, image, hashtags, likes} = card;

  return (
    <div className="card-profile">
      <figure className="card-profile__figure">
        <img
          src={image}
          className="card-profile__image"
          width={190}
          height={190}
          alt="Аватар."
        />
      </figure>

      <div className="card-profile__name">
        <b>{name}</b>
      </div>

      <div className="card-profile__online"></div>
      
      <p
        className="card-profile__hashtags"
        dangerouslySetInnerHTML={{ __html: hashtags }}
      />

      <button className="card-profile__btn-call btn">Позвать!</button>
      <button className="card-profile__btn-likes"></button>
      <span className="card-profile__likes-number">{likes}</span>

      <div className="card-profile__level"></div>
    </div>
  );
}

export default CardProfile;