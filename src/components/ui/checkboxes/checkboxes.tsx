import React from 'react';
import { useState, useEffect } from "react";
import './checkboxes.module.scss';
import { ReactComponent as FiltersArrow } from '../../../assets/img/filters_arrow.svg';

const hobbies = [
    { value: 'Спортзал' },
    { value: 'Кальян' },
    { value: 'Диван' },
];

const music = [
    { value: 'Тяжелый рок', },
    { value: 'Русский рэп', },
    { value: 'Евроденс', },
];

const food = [
    { value: 'Мясоед', },
    { value: 'Сидит на ПП', },
    { value: 'Веган-сыроед', },
];



function Checkboxes() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767 && window.innerWidth < 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={(isMobile) ? 'filters__wrapper checkboxes checkboxes--opend' : 'filters__wrapper checkboxes'}>
            <div className="checkboxes__holder">
                <h3 onClick={(evt) => evt.currentTarget.closest('div')?.classList.toggle('checkboxes__holder--opend')}>
                    Хобби:
                    <FiltersArrow />
                </h3>
                <ul className="checkboxes__list">
                    {hobbies.map(({ value }) => (
                        <li className="custom-toggle custom-toggle--checkbox is-valid" key={value}>
                            <label>
                                <input
                                    className="checkbox__input"
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                />
                                <span className="custom-toggle__icon" tabIndex={0}></span>
                                <span className="custom-toggle__label">{`${value}`}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div >

            <div className="checkboxes__holder">
                <h3 onClick={(evt) => evt.currentTarget.closest('div')?.classList.toggle('checkboxes__holder--opend')}>
                    Музыка:
                    <FiltersArrow />
                </h3>
                <ul className="checkboxes__list">
                    {music.map(({ value }) => (
                        <li className="custom-toggle custom-toggle--checkbox is-valid" key={value}>
                            <label>
                                <input
                                    className="checkbox__input"
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                />
                                <span className="custom-toggle__icon" tabIndex={0}></span>
                                <span className="custom-toggle__label">{`${value}`}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div >

            <div className="checkboxes__holder">
                <h3 onClick={(evt) => evt.currentTarget.closest('div')?.classList.toggle('checkboxes__holder--opend')}>
                    Еда:
                    <FiltersArrow />
                </h3>
                <ul className="checkboxes__list">
                    {food.map(({ value }) => (
                        <li className="custom-toggle custom-toggle--checkbox is-valid" key={value}>
                            <label>
                                <input
                                    className="checkbox__input"
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                />
                                <span className="custom-toggle__icon" tabIndex={0}></span>
                                <span className="custom-toggle__label">{`${value}`}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div >
        </div >
    );
}

export default Checkboxes;




