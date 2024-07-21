import { ReactComponent as GoImg } from '../../../assets/img/goImg.svg'
import { ReactComponent as Go } from '../../../assets/img/go.svg'
import { ReactComponent as Call } from '../../../assets/img/icon_call.svg'
import { ReactComponent as Mail } from '../../../assets/img/icon_mail.svg'
import { ReactComponent as MenuButton } from '../../../assets/img/menu_button.svg'
import { ReactComponent as MenuButtonClose } from '../../../assets/img/menu_button_close.svg'
import { ReactComponent as Telegram } from '../../../assets/img/telegram.svg'
import { ReactComponent as Vk } from '../../../assets/img/vk.svg'
import { ReactComponent as Youtube } from '../../../assets/img/youtube.svg'
import { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom'   код для добавления модификатора для хедера в зависимости от адреса текущей страницы

function Header() {
    /*
    //код для добавления модификатора для хедера в зависимости от адреса текущей страницы

    const location = useLocation();
    */
    let headerClass = '';
    /*
    if (location.pathname === '/index.html') {
        headerClass = 'header--main';
    } else if (location.pathname === '/catalog.html') {
        headerClass = 'header--catalog';
    }
    */
    /// код для бургерного меню


    const [isMobile, setIsMobile] = useState(false);
    const BurgerMenu = () => {
        // Код для бургерного меню

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
                                <li className="header__nav-item">
                                    <a href="#">
                                        о сервисе
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">
                                        направления
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">
                                        попутчики
                                    </a>
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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1440) {
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
        <header className={`header ${headerClass}`}>
            {isMobile ? (
                <BurgerMenu />
            ) : (
                <div className="header__container container">
                    <div className="header__logo">
                        <div className="header__logo-img">
                            <GoImg />
                        </div>
                        <div className="header__logo-text">
                            <Go />
                        </div>
                    </div>
                    <div className="header__menu">
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item">
                                    <a href="#">
                                        о сервисе
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">
                                        направления
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">
                                        попутчики
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <ul className="header__contacts-list">
                            <li className="header__contacts-item">
                                <a href="tel:88005558628">
                                    <Call />
                                </a>
                            </li>
                            <li className="header__contacts-item">
                                <a href="mailto:mail@htmlacademy.pro">
                                    <Mail />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </header>
    );
}

export default Header;


