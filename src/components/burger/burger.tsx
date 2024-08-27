import { useState } from "react";
import { ReactComponent as MenuButton } from '../../assets/img/menu_button.svg';
import { ReactComponent as MenuButtonClose } from '../../assets/img/menu_button_close.svg';
import { ReactComponent as Telegram } from '../../assets/img/telegram.svg';
import { ReactComponent as Vk } from '../../assets/img/vk.svg';
import { ReactComponent as Youtube } from '../../assets/img/youtube.svg';
import { ReactComponent as GoImg } from '../../assets/img/goImg.svg';
import { ReactComponent as Go } from '../../assets/img/go.svg';
import { ReactComponent as Call } from '../../assets/img/icon_call.svg';
import { ReactComponent as Mail } from '../../assets/img/icon_mail.svg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isClicked, setIsClicked] = useState(false);
    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };


    return (
        <div className={isClicked ? 'header__container container header__container--opend' : 'header__container container'}>
            <div className="header__logo">
                <div className="header__logo-img">
                    <GoImg />
                </div>
                <div className="header__logo-text">
                    <Go />
                </div>
            </div>
            <button className="header__burger-button" onClick={() => { toggleMenu(); handleButtonClick(); }}>
                <p className="header__button-open">
                    <MenuButton />
                </p>
                <p className="header__button-close">
                    <MenuButtonClose />
                </p>
            </button>
            {isOpen && (
                <div className="header__burger-info">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item" onClick={() => { toggleMenu(); handleButtonClick(); }}>
                                <Link to={AppRoute.Root}>о сервисе</Link>
                            </li>
                            <li className="header__nav-item" onClick={() => { toggleMenu(); handleButtonClick(); }}>
                                <Link to={AppRoute.Form}>направления</Link>
                            </li>
                            <li className="header__nav-item" onClick={() => { toggleMenu(); handleButtonClick(); }}>
                                <Link to={AppRoute.Catalog}>попутчики</Link>
                            </li>
                        </ul>
                    </nav>
                    <ul className="header__contacts-list">
                        <li className="header__contacts-item">
                            <p>
                                <Call />
                            </p>
                            <a href="tel:88005558628" className="header__contacts-info">
                                8 800 555-86-28
                            </a>
                        </li>
                        <li className="header__contacts-item">
                            <p>
                                <Mail />
                            </p>
                            <a href="mailto:mail@htmlacademy.pro" className="header__contacts-info">
                                mail@htmlacademy.pro
                            </a>
                        </li>
                    </ul>
                    <ul className="header__social-list">
                        <li className="header__social-item">
                            <a href="#">
                                <Telegram />
                            </a>
                        </li>
                        <li className="header__social-item">
                            <a href="#">
                                <Vk />
                            </a>
                        </li>
                        <li className="header__social-item">
                            <a href="#">
                                <Youtube />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;