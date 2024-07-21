import React from 'react';
import { ReactComponent as Heart}  from '../../../assets/img/heart.svg'
import { ReactComponent as Plane } from '../../../assets/img/plane.svg'
import { ReactComponent as Bus } from '../../../assets/img/bus.svg'
import { ReactComponent as Bicycle } from '../../../assets/img/bicycle.svg'
import { ReactComponent as Onfoot } from '../../../assets/img/onfoot.svg'
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

      <div className="card-profile__state-wrapper">
        <div className="card-profile__state card-profile__state--offline">
        
        </div>
      </div>
      
      <p
        className="card-profile__hashtags"
        dangerouslySetInnerHTML={{ __html: hashtags }}
      />

      <div className="card-profile__btn-call-wrapper">
        <button className="card-profile__btn-call btn">Позвать!</button>
      </div>
      
      <button className="card-profile__btn-like">
        <Heart />
      </button>
      <div className="card-profile__likes-number-wrapper">
        <span className="card-profile__likes-number">{likes}</span>
      </div>
      

      <div className="card-profile__transport">
        <span>транспорт:</span>
        <ul className="card-profile__transport-list">
          <li className="card-profile__transport-item">
            <Plane />
          </li>
          <li className="card-profile__transport-item">
            <Bus />
          </li>
          <li className="card-profile__transport-item">
            <Bicycle />
          </li>
          <li className="card-profile__transport-item">
            <Onfoot />
          </li>
        </ul>
      </div>

      <div className="card-profile__level">
        <span>левел:</span>
        <div className="card-profile__level-container">

        </div>
      </div>

      <div className="card-profile__country">
        <span>хочет посетить:</span>
        <div>
          <ul className="card-profile__country-list">
            <li className="card-profile__country-item">
              <div className="card-profile__country-flag">
          
              </div>
              <span className="card-profile__country-name">шри-ланка</span>
            </li>
            <li className="card-profile__country-item">
              <div className="card-profile__country-flag">
          
              </div>
              <span className="card-profile__country-name">тайланд</span>
            </li>
            <li className="card-profile__country-item">
              <div className="card-profile__country-flag">
          
              </div>
              <span className="card-profile__country-name">сейшелы</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;