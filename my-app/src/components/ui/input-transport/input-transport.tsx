import React from 'react';
import { ReactComponent as Plane } from '../../../assets/img/plane.svg'
import { ReactComponent as Bus } from '../../../assets/img/bus.svg'
import { ReactComponent as Bicycle } from '../../../assets/img/bicycle.svg'
import { ReactComponent as Onfoot } from '../../../assets/img/onfoot.svg'
import './input-transport.module.scss'

function InputTransport() {
    return (
        <fieldset className="input-transport">
            <div className="input-transport__wrapper">
                <span className="input-transport__badge">транспорт</span>

                <ul className="input-transport__list">
                    <li className="input-transport__item">
                        <div className="input-transport__checkbox">
                            <label className="input-transport__label">
                                <input 
                                    className="input-transport__input"
                                    type="checkbox"
                                    value=""
                                    name="plane"
                                />
                                <span className="input-transport__icon">
                                    <Plane />
                                </span>
                            </label>
                        </div>
                    </li>

                    <li className="input-transport__item">
                        <div className="input-transport__checkbox">
                            <label className="input-transport__label">
                                <input 
                                    className="input-transport__input"
                                    type="checkbox"
                                    value=""
                                    name="bus"
                                />
                                <span className="input-transport__icon">
                                    <Bus />
                                </span>
                            </label>
                        </div>
                    </li>

                    <li className="input-transport__item">
                        <div className="input-transport__checkbox">
                            <label className="input-transport__label">
                                <input 
                                    className="input-transport__input"
                                    type="checkbox"
                                    value=""
                                    name="bicycle"
                                />
                                <span className="input-transport__icon">
                                    <Bicycle />
                                </span>
                            </label>
                        </div>
                    </li>

                    <li className="input-transport__item">
                        <label className="input-transport__label">
                            <input 
                                className="input-transport__input"
                                type="checkbox"
                                value=""
                                name="onfoot"
                            />
                            <span className="input-transport__icon">
                                <Onfoot />
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
        </fieldset>
    );
  }
  
  export default InputTransport;