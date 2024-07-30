import React from 'react';
import CheckboxTransport from '../checkbox-transport/checkbox-transport';
import './input-transport.module.scss'


function InputTransport() {
    return (
        <fieldset className="input-transport">
            <div className="input-transport__wrapper">
                <span className="input-transport__badge">транспорт</span>

                <CheckboxTransport />
            </div>
        </fieldset>
    );
  }
  
  export default InputTransport;
