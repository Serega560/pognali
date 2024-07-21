import { ReactComponent as GoImg } from '../../../assets/img/goImg.svg'
import { ReactComponent as Go } from '../../../assets/img/go.svg'
import { ReactComponent as Call}  from '../../../assets/img/icon_call.svg'
import { ReactComponent as Mail}  from '../../../assets/img/icon_mail.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <div className="header__logo-img">
                        <GoImg/>
                    </div>
                    <div className="header__logo-text">
                        <Go/>
                    </div>
                </div>
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
                            <Call/>
                        </a>
                    </li>
                    <li className="header__contacts-item">
                        <a href="mailto:mail@htmlacademy.pro">
                            <Mail/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
