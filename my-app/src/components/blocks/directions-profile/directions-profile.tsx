import React from 'react';
import ProfileLevel from '../../ui/profile-level/profile-level';
import InputHashtags from '../../ui/input-hashtags/input-hashtags';
import InputTransport from '../../ui/input-transport/input-transport';
import Avatar from '../../../assets/img/directions/avatar.jpg'
import './directions-profile.module.scss'

function DirectionsProfile() {
    return (
      <section className="directions-profile">
        <div className="directions-profile__container container">
          <div className="directions-profile__wrapper">
            <div className="directions-profile__level">
              <ProfileLevel />
            </div>
            <div className="directions-profile__image-wrapper">
              <picture className="directions-profile__figure">
                <img 
                  className="directions-profile__image"
                  src={Avatar} 
                  alt="Фотография вашего профиля." 
                />
              </picture>
            </div>
            <div className="directions-profile__upload-image">
              <button className="directions-profile__upload-image-btn" type="button">сменить фото</button>
            </div>
            <div className="directions-profile__hashtags">
              <InputHashtags />
            </div>
            <div className="directions-profile__transport">
              <InputTransport />
            </div>
          </div>
        </div>
        
      </section>
    );
  }
  
  export default DirectionsProfile;