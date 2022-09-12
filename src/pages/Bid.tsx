import React from 'react';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';
import { Card } from '../components';
import styles from "../styles/bid/Bid.module.css"

const Bid = () => {
    return (
        <>

            <section className={styles.main_bid}>
                <div className={styles.container}>
                    <IconContext.Provider value={{ className: 'bid_icons' }}>
                        <div className={styles.bid_request}>
                            <div className={styles.bid_search_container}>
                                <div>
                                    <input type="text" name="search" placeholder="Search Request" />
                                    <button><FaSearch className={`${styles.search}`} /></button>
                                </div>
                            </div>
                            <p>Advanced Search</p>
                        </div>
                        <div className={styles.sort}>
                            <p>Sort</p>
                            <p><button>Best Match</button></p>
                            <p><button>Most Recent</button></p>
                        </div>
                    </IconContext.Provider>


                    <div>
                        <Card />
                    </div>
                </div>

            </section>

        </>
    )
}

export default Bid