import { IconContext } from 'react-icons';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiBell } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';
import { RiArrowDropUpLine, RiGridFill } from 'react-icons/ri';
import account from '../assets/account.svg';
import house from '../assets/house.svg';
import person from '../assets/person.svg';
import styles from "../styles/Mobilemenu.module.css";



type Props = {
    setNav: (val: boolean) => void,
    nav: boolean
}


const Mobilemenu: React.FC<Props> = ({ nav, setNav }) => {
    return (
        <div className={styles.mobilemenu} >
            <div className={styles.close_container} onClick={() => setNav(!nav)}>
                <AiFillCloseCircle style={{ color: '#fff', fontSize: '2em' }} />
            </div>
            <div>
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
                </ul>
                <ul>
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
        </div>
    )
}

export default Mobilemenu