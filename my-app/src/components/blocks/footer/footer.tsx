import {ReactComponent as GoPicture} from '../../../assets/img/goPicture.svg'
import {ReactComponent as Go} from '../../../assets/img/go.svg'
import {ReactComponent as Telegram} from '../../../assets/img/telegram.svg'
import {ReactComponent as Vk} from '../../../assets/img/vk.svg'
import {ReactComponent as Youtube} from '../../../assets/img/youtube.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="container">

                    <div className="logo-main">
                        <GoPicture/>
                    </div>
                    <div className="logo">
                        <Go/>
                    </div>

                    <ul className="social-list">
                        <li className="social-item">
                            <a href="#">
                                <Vk/>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#">
                                <Telegram/>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href="#">
                                <Youtube/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
