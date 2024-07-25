import React from 'react';
import Heading from '../../blocks/heading/heading';
import DirectionsProfile from '../../blocks/directions-profile/directions-profile';

import "./form.module.scss"


function Form(): JSX.Element {
    return (
      <section className="form">
        <Heading />
        <DirectionsProfile />
        <div className="form__wrapper"></div>
      </section>

      
    );
  }
  
  export default Form;
