import React from 'react';
import { ReactComponent as Fly } from '../../../assets/img/fly.svg';
import { ReactComponent as Bus } from '../../../assets/img/bus.svg';
import { ReactComponent as Bicycle } from '../../../assets/img/bicycle.svg';
import { ReactComponent as Onfoot } from '../../../assets/img/onfoot.svg';
import { useAppDispatch } from '../../../hooks/hooks';
import { setDataToPostTransport} from '../../../store/app-slice';
import './checkbox-transport.module.scss'


function CheckboxTransport() {
    //const typeOfTransport = ['fly', 'bus', 'bicycle', 'onfoot'];
    const dispatch = useAppDispatch();

    return (
        <ul className="checkbox-transport">
            {/* {typeOfTransport.map((type) => {
                return (
                    <li className="checkbox-transport__item" key={type}>
                        <div className="checkbox-transport__checkbox">
                            <label className="checkbox-transport__label">
                                <input 
                                    className="checkbox-transport__input"
                                    type="checkbox"
                                    value={type}
                                    name={type}
                                    onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                                />
                                <span className="checkbox-transport__icon">
                                    <img className="checkbox-transport__icon-img" src={`../../../assets/img/${type}.svg`} alt="" />
                                </span>
                            </label>
                        </div>
                    </li>
                )
            })} */}


            <li className="checkbox-transport__item">
                <div className="checkbox-transport__checkbox">
                    <label className="checkbox-transport__label">
                        <input 
                            className="checkbox-transport__input"
                            type="checkbox"
                            value="Fly"
                            name="Fly"
                            onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                        />
                        <span className="checkbox-transport__icon">
                            <Fly />
                        </span>
                    </label>
                </div>
            </li>

            <li className="checkbox-transport__item">
                <div className="checkbox-transport__checkbox">
                    <label className="checkbox-transport__label">
                        <input 
                            className="checkbox-transport__input"
                            type="checkbox"
                            value="Bus"
                            name="Bus"
                            onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                        />
                        <span className="checkbox-transport__icon">
                            <Bus />
                        </span>
                    </label>
                </div>
            </li>

            <li className="checkbox-transport__item">
                <div className="checkbox-transport__checkbox">
                    <label className="checkbox-transport__label">
                        <input 
                            className="checkbox-transport__input"
                            type="checkbox"
                            value="Bicycle"
                            name="Bicycle"
                            onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                        />
                        <span className="checkbox-transport__icon">
                            <Bicycle />
                        </span>
                    </label>
                </div>
            </li>

            <li className="checkbox-transport__item">
                <label className="checkbox-transport__label">
                    <input 
                        className="checkbox-transport__input"
                        type="checkbox"
                        value="Onfoot"
                        name="Onfoot"
                        onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                    />
                    <span className="checkbox-transport__icon">
                        <Onfoot />
                    </span>
                </label>
            </li>
        </ul>
    );
  }
  
export default CheckboxTransport;
