import React, { useEffect, useState } from 'react';
import './level.module.scss';

type LevelProps = {
  level: number;
};

function Level({ level }: LevelProps): JSX.Element {
  const [dashOffset, setDashOffset] = useState(180 - (180 * level) / 100);

  useEffect(() => {
    const updateDashOffset = () => {
      if (window.innerWidth <= 767) {
        setDashOffset(125 - (125 * level) / 100);
      } else {
        setDashOffset(180 - (180 * level) / 100);
      }
    };

    updateDashOffset(); // Set initial value
    window.addEventListener('resize', updateDashOffset);

    return () => {
      window.removeEventListener('resize', updateDashOffset);
    };
  }, [level]);

  return (
    <div className="level">
      <div className="level__wrapper">
        <div className="level__container">
          <div className="level__progress">
            <svg>
              <circle cx="29" cy="29" r="29"></circle>
              <circle
                cx="29"
                cy="29"
                r="29"
                style={{ strokeDashoffset: dashOffset, stroke: '#FF8D30' }}
              ></circle>
            </svg>
            <div className="level__number">
              <b>{level}</b>
              <span>level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Level;
