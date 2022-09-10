import { FaSearch } from "react-icons/fa";
import { CgClose } from 'react-icons/cg';
import line from "../../assets/line.svg"
import hamburger from "../../assets/hamburger.svg"
import styles from "../../styles/patronise/PatroniseNav.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";
import PatroniseCard from "./PatroniseCard";

const PatroniseNav = () => {
    return (
        <>
            <div className={styles.patronise_nav_main}>
                <form className={styles.patronise_search}>
                    <div>
                        <img src={hamburger} alt="menu" width="25" height="25" />
                        <input type="text" placeholder="Takeout" />

                    </div>
                    <div className={styles.patronise_submit_icons}>
                        <button><FaSearch /></button>
                        <img src={line} alt="line" />
                        <button><CgClose /></button>
                    </div>
                </form>
                <ul>
                    <li>Rating <RiArrowDropDownFill style={{ verticalAlign: 'middle', fontSize: '1.4em' }} /></li>
                    <li>Hours <RiArrowDropDownFill style={{ verticalAlign: 'middle', fontSize: '1.4em' }} /></li>
                    <li><FiSliders style={{ verticalAlign: 'middle', fontSize: '1.4em', color: '#B2530D', marginRight: '0.3em' }} />More filters</li>
                </ul>

            </div>
            <PatroniseCard />
        </>
    )
}

export default PatroniseNav