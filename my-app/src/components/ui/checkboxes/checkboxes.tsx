import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { setDataToPostTransport } from '../../../store/app-slice';
import './checkboxes.module.scss';

const hobbies = [
    { value: 'Спортзал' },
    { value: 'Кальян' },
    { value: 'Диван' },
    { value: 'Onfoot' },
];

const music = [
    { value: 'Спортзал', },
    { value: 'Кальян', },
    { value: 'Диван', },
    { value: 'Onfoot', },
];

const food = [
    { value: 'Спортзал', },
    { value: 'Кальян', },
    { value: 'Диван', },
    { value: 'Onfoot', },
];

function Checkboxes() {
    const dispatch = useAppDispatch();

    return (
        <div className="filters__holder checkboxes">
            <ul className="checkboxes__list">
                {hobbies.map(({ value }) => (
                    <li className="checkboxes__item checkbox" key={value}>
                        <div className="checkbox__checkbox">
                            <label className="checkbox__label">
                                <p>{`${value}`}</p>
                                <input
                                    className="checkbox__input"
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                    onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                                />
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="checkboxes__list">
                {music.map(({ value }) => (
                    <li className="checkboxes__item checkbox" key={value}>
                        <div className="checkbox__checkbox">
                            <label className="checkbox__label">
                                <p>{`${value}`}</p>
                                <input
                                    className="checkbox__input"
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                    onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                                />
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
            <ul className="checkboxes__list">
                {food.map(({ value }) => (
                    <li className="checkbox__item checkbox" key={value}>
                        <div className="checkbox__checkbox">
                            <label className="checkbox__label">
                                <p>{`${value}`}</p>
                                <input
                                    className="checkbox__input"
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                    onClick={(evt) => dispatch(setDataToPostTransport(evt.currentTarget.name))}
                                />
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Checkboxes;




