import React, { useState } from 'react';
import { ReactComponent as Heart}  from '../../../assets/img/heart.svg'
import { ReactComponent as Fly } from '../../../assets/img/fly.svg'
import { ReactComponent as Bus } from '../../../assets/img/bus.svg'
import { ReactComponent as Bicycle } from '../../../assets/img/bicycle.svg'
import { ReactComponent as Onfoot } from '../../../assets/img/onfoot.svg'
import { CardData } from '../../types/card-data';
import './card-profile.module.scss';
import Level from '../level/level';
import BtnCall from '../buttons/btn-call/btn-call';


type CardProfileProps = {
  cardData: CardData;
};

const transportIcons = [
  { type: 'Fly', Icon: Fly },
  { type: 'Car', Icon: Bus },
  { type: 'Bicycle', Icon: Bicycle },
  { type: 'Onfoot', Icon: Onfoot },
];

function CardProfile({ cardData }: CardProfileProps): JSX.Element {
  const { name, image, hashtags, likes, online, transport_choice, country, level, is_form_generated } = cardData;
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card-profile">
      {/* фото профиля */}
      <picture className="card-profile__figure">
        <img
          src={image}
          className="card-profile__image"
          width={190}
          height={190}
          alt="Аватар."
        />
      </picture>

      {/* имя в карточке */}
      <div className="card-profile__name"><b>{name}</b></div>

      {/* статус онлайн */}
      <div className="card-profile__state-wrapper">
        <div className={`card-profile__state ${online ? 'card-profile__state--online' : 'card-profile__state--offline'}`}></div>
      </div>
      
      {/* хештеги */}
      <p className="card-profile__hashtags">{hashtags}</p>

      {/* кнопка позвать */}
      {is_form_generated ? <div className="card-profile__btn-call-wrapper">
        <BtnCall />
      </div> : ''}
      
      {/* кнопка лайк и кол-во лайков */}
      {is_form_generated ? <>
        <button className={`card-profile__btn-like ${isLiked ? 'active' : ''}`} onClick={handleLikeClick}>
          <Heart />
        </button>
        <div className="card-profile__likes-number-wrapper">
          <span className="card-profile__likes-number">{likes}</span>
        </div>
      </> : ''}
      

      {/* список выбранного транспорта */}
      <div className="card-profile__transport">
        <div className="card-profile__transport-badge">
          <span>транспорт:</span>
        </div>
        <ul className="card-profile__transport-list">
          {transportIcons.map(({ type, Icon }) => (
            <li key={type} className={`card-profile__transport-item ${transport_choice.includes(type) ? 'active' : ''}`}>
              <Icon />
            </li>
          ))}
        </ul>
      </div>

      {/* уровень профиля */}
      <div className="card-profile__level">
        <div className="card-profile__level-badge">
          <span>левел:</span>
        </div>
        <div className="card-profile__level-container">
          <Level level={level} />
        </div>
      </div>

      {/* список стран */}
      <div className="card-profile__country">
        <div className="card-profile__country-badge">
          <span>хочет посетить:</span>
        </div>
        <div>
          <ul className="card-profile__country-list">
            {country.map((country, index) => (
              <li key={index} className="card-profile__country-item">
                <div className="card-profile__country-flag">
                  <picture className="card-profile__country-flag-figure">
                    <img
                      src={country.flag}
                      className="card-profile__country-flag-image"
                      width={35}
                      height={24}
                      alt="Флаг."
                    />
                </picture>
                </div>
                <span className="card-profile__country-name">{country.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default CardProfile;
