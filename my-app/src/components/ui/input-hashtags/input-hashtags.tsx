import React from 'react';
import './input-hashtags.module.scss'

function InputHashtags() {
  return (
    <fieldset className="input-hashtags">
      <div className="input-hashtags__wrapper">
        <label className="input-hashtags__badge" htmlFor="hashtags">ТЭГИ</label>
        <input 
          className="input-hashtags__input"
          type="text"
          name="hashtags"
          id="hashtags"
          placeholder="Коротко о себе в виде 5-8 хештэгов"
        ></input>
      </div>
    </fieldset>
  );
}

export default InputHashtags;