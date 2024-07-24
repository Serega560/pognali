import React from 'react';
import './profile-level.module.scss'

function ProfileLevel() {
  return (
    <div className="profile-level">
      <div className="profile-level__wrapper">
        <div className="profile-level__container">
          <div className="profile-level__progress">
            <svg>
              <circle cx="46" cy="46" r="46"></circle>
              <circle cx="46" cy="46" r="46"></circle>
            </svg>
            <div className="profile-level__number">
              <b>80</b>
              <span>level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLevel;
