
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
        <span>{range[0]}</span>
        <span>{range[1]}</span>
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