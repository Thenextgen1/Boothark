import { useState } from 'react';
import styles from '../styles/Header.module.css';
import { IconContext } from "react-icons";
import { HiBell } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiArrowDropUpLine, RiGridFill } from 'react-icons/ri';
import logo from '../assets/logo.svg';
import account from '../assets/account.svg';
import house from '../assets/house.svg';
import person from '../assets/person.svg';
import { Link } from 'react-router-dom';
import Mobilemenu from './Mobilemenu';


const Header = (): JSX.Element => {

    const [nav, setNav] = useState(false);

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
                    <div className={styles.asset}>
                        <div>

                            <img src={house} alt="house" />
                            <p>Asset</p>
                        </div>
                        <div>

                            <img src={account} alt="money" />
                            <p>Account</p>
                        </div>
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
                            <RiArrowDropUpLine style={{ color: 'white', fontSize: "1.5em", verticalAlign: "super" }} />

                        </li>
                        <li>
                            <img src={person} alt="notification" />
                        </li>
                    </ul>
                </IconContext.Provider>

                <div className={styles.menu} onClick={() => setNav(!nav)}>
                    <GiHamburgerMenu style={{ fontSize: '2em', color: "#fff", cursor: 'pointer' }} />
                </div>

                {nav && <Mobilemenu nav={nav} setNav={setNav} />}

            </nav>
        </header>
    )
}

export default Header