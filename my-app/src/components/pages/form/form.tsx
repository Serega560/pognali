import React from 'react';
import Heading from '../../blocks/heading/heading';
import DirectionsProfile from '../../blocks/directions-profile/directions-profile';

import "./form.module.scss"
import Plan from '../../blocks/plan/plan';


function Form(): JSX.Element {
    return (
      <section className="form">
        <Heading heading={"направления"}/>
        <DirectionsProfile />
        <Plan />
        <div className="form__wrapper"></div>
      </section>

      
    );
  }
  
  export default Form;
