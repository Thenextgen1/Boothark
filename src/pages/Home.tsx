import { Outlet, NavLink, useLocation } from "react-router-dom";
import { BidNav, PatroniseNav } from '../components';
import styles from "../styles/Home.module.css";

const Home = (): JSX.Element => {
    let activeClassName = styles.side_active;
    const { pathname } = useLocation();

    let activeStyle = {
        backgroundColor: 'var(--arkMarron)',
        color: '#fff'
    }

    const nav = () => {
        if (pathname === '/bid' || pathname === '/') {
            return true
        }
        else {
            return false
        }
    }

    return (
        <main className={styles.home}>

            <section className={styles.side_nav}>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to="patronise">Patronise</NavLink>
                    </li>
                    <li >
                        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to="bid" style={nav() ? activeStyle : undefined}>Bid</NavLink>
                    </li>
                </ul>

                {nav() &&
                    <BidNav />

                }

                {!nav() &&

                    <PatroniseNav />
                }


            </section>


            <Outlet />
        </main>
    )
}

export default Home