import React from 'react';
import { CardData } from '../../types/card-data';
import './card-profile.module.scss';
// import Level from '../level/level';


type CardProfileProps = {
  cardData: CardData;
};

function CardProfile({cardData}: CardProfileProps): JSX.Element {
  const {name, image, hashtags, likes} = cardData;

  return (
    <div className="card-profile">
      <picture className="card-profile__figure">
        <img
          src={image}
          className="card-profile__image"
          width={190}
          height={190}
          alt="Аватар."
        />
      </picture>

      <div className="card-profile__name">
        <b>{name}</b>
      </div>

      <div className="card-profile__state card-profile__state--offline"></div>
      
      <p
        className="card-profile__hashtags"
        dangerouslySetInnerHTML={{ __html: hashtags }}
      />

      <div className="card-profile__btn-call-wrapper">
        <button className="card-profile__btn-call btn">Позвать!</button>
      </div>
      
      <button className="card-profile__btn-likes"></button>
      <div className="card-profile__likes-number-wrapper">
        <span className="card-profile__likes-number">{likes}</span>
      </div>
      

      <div className="card-profile__transport">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>

      <div className="card-profile__level"></div>

      <div className="card-profile__countries">
        <span>хочет посетить:</span>
        <div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;