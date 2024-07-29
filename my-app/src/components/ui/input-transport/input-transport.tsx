import React from 'react';
import { ReactComponent as Fly } from '../../../assets/img/fly.svg'
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
                                    value="Fly"
                                    name="Fly"
                                />
                                <span className="input-transport__icon">
                                    <Fly />
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
                                    value="Bus"
                                    name="Bus"
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
                                    value="Bicycle"
                                    name="Bicycle"
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
                                value="Onfoot"
                                name="Onfoot"
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