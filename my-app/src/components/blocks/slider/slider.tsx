
import React, { useState } from 'react';
import Slider from 'react-slider';
import './slider.module.scss'


const RangeSlider = () => {
  const [range, setRange] = useState<number[]>([20, 80]);

  const handleSliderChange = (values: number[]) => {
    setRange(values);
  };

  return (
    <div style={{ width: '300px', margin: '50px auto' }}>
      <h2>Выберите диапазон</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>От: {range[0]}</span>
        <span>До: {range[1]}</span>
      </div>
      <Slider
        min={0}
        max={100}
        value={range}
        onChange={handleSliderChange}
        renderTrack={(props, state) => (
          <div {...props} className="track" />
        )}
        renderThumb={(props, state) => (
          <div {...props} className="thumb" />
        )}
      />
    </div>
  );
};

const AppSlider = () => {
  return (
    <div className="filters__slider">
      <RangeSlider />
    </div>
  );
};

export default AppSlider;