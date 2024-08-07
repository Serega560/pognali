import React from 'react';
import './input-hashtags.module.scss'
import { useAppDispatch } from '../../../hooks/hooks';
import { setHashTags } from '../../../store/app-slice';

function InputHashtags() {
  const dispatch = useAppDispatch();
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
          onChange={(evt) => dispatch(setHashTags(evt.currentTarget.value))}
        ></input>
      </div>
    </fieldset>
  );
}

export default InputHashtags;