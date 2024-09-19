
import React, { useState } from 'react';
import Slider from 'react-slider';
import './slider.module.scss'

const RangeSlider = () => {
  const [range, setRange] = useState<number[]>([20, 80]);

  const handleSliderChange = (values: number[]) => {
    setRange(values);
  };

  return (
    <div className="slider__holder">
      <div className="slider__range">
        <input type="number"
          onChange={(evt) => setRange((current) => [(Number(evt.target.value) > current[1] ? current[1] - 1 : Number(evt.target.value)), current[1]])}
          value={range[0]}
          max={range[1]}
          onKeyDown={(evt) => {
            if (evt.key === ',' || evt.key === '.') {
              evt.preventDefault();
            }
          }}
        />
        <input type="number"
          onChange={(evt) => setRange((current) => [current[0], Number(evt.target.value)])}
          onBlur={(evt) => setRange((current) => [current[0], (Number(evt.target.value) < current[0] ? current[0] + 1 : Number(evt.target.value))])}
          value={range[1]}
          min={range[0]}
          onKeyDown={(evt) => {
            if (evt.key === ',' || evt.key === '.') {
              evt.preventDefault();
            }
          }}
        />
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

const AddSlider = () => {
  return (
    <div className="filters__slider">
      <p className="checkboxes__name">Левел:</p>
      <RangeSlider />
    </div>
  );
};

export default AddSlider;