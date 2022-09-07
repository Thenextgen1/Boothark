import styles from '../styles/Header.module.css';
import { IconContext } from "react-icons";
import { HiBell } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';
import { RiGridFill } from 'react-icons/ri';
import logo from '../assets/logo.svg';
import account from '../assets/account.svg';
import house from '../assets/house.svg';
import person from '../assets/person.svg';
import { Link } from 'react-router-dom';


const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <Link to="/">
                        <div>

                            <img src={logo} alt="logo" />
                            <h1>Ark</h1>
                        </div>
                    </Link>
                    <div>

                        <img src={house} alt="house" />
                        <p>Asset</p>
                    </div>
                    <div>

                        <img src={account} alt="money" />
                        <p>Account</p>
                    </div>
                </div>
                <IconContext.Provider value={{ className: 'nav-icons' }}>
                    <ul>
                        <li>
                            <input className={styles.search} placeholder='Search' type="text" />
                        </li>
                        <li>
                            <HiBell className={`${styles.bell}`} />
                        </li>
                        <li>
                            <MdMessage className={`${styles.message}`} />
                        </li>
                        <li>
                            <RiGridFill className={`${styles.grid}`} />
                        </li>
                        <li>
                            <img src={person} alt="notification" />
                        </li>
                    </ul>
                </IconContext.Provider>
            </nav>
        </header>
    )
}

export default Header