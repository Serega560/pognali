import { ReactComponent as GoImg } from '../../../assets/img/goImg.svg'
import { ReactComponent as Go } from '../../../assets/img/go.svg'
import { ReactComponent as Call } from '../../../assets/img/icon_call.svg'
import { ReactComponent as Mail } from '../../../assets/img/icon_mail.svg'
import { useState, useEffect } from 'react';
import BurgerMenu from '../../burger/burger';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function Header() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
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
        <header className={`header`}>
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
                                    <Link to={AppRoute.Root}>о сервисе</Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link to={AppRoute.Form}>направления</Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link to={AppRoute.Catalog}>попутчики</Link>
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

