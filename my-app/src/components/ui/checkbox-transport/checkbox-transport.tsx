import React from 'react';
import { ReactComponent as Fly } from '../../../assets/img/fly.svg';
import { ReactComponent as Bus } from '../../../assets/img/bus.svg';
import { ReactComponent as Bicycle } from '../../../assets/img/bicycle.svg';
import { ReactComponent as Onfoot } from '../../../assets/img/onfoot.svg';
import { useAppDispatch } from '../../../hooks/hooks';
import { setDataToPostTransport } from '../../../store/app-slice';
import './checkbox-transport.module.scss';


const transportIcons = [
    { type: 'Fly', Icon: Fly },
    { type: 'Bus', Icon: Bus },
    { type: 'Bicycle', Icon: Bicycle },
    { type: 'Onfoot', Icon: Onfoot },
];

function CheckboxTransport() {
    const dispatch = useAppDispatch();

    return (
        <ul className="checkbox-transport">
            {transportIcons.map(({ type, Icon }) => (
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
                                <Icon />
                            </span>
                        </label>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CheckboxTransport;
