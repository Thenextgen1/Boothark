import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { getPlaces } from '../store/Patronise/patronise';
import { FaDirections, FaSearch } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowForward } from 'react-icons/io'
import { BiCheck } from 'react-icons/bi';
import { IoStar } from 'react-icons/io5';
import globe from "../assets/globe.svg";
import phone from "../assets/call.svg";
import clock from "../assets/clock.svg";
import shield from "../assets/shield.svg";
import locationPosition from "../assets/location_position.svg";
import subMap from "../assets/submap.png";
import marker from "../assets/places_marker.svg"
import save from "../assets/save.svg"
import sharePhone from "../assets/places_share.svg"
import share from "../assets/share.svg"
import hamburger from "../assets/hamburger.svg";
import line from "../assets/line.svg";
import swirl from "../assets/swirl.svg";
import styles from "../styles/Places.module.css";





const Places = () => {
    const { placesId } = useParams();
    const places = getPlaces(placesId);


    let activeClassName = styles.side_active;

    return (
        <main className={styles.places}>
            <section className={styles.side_nav}>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to="/patronise">Patronise</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to="/bid">Bid</NavLink>
                    </li>
                </ul>
                <div>
                    <div className={styles.patronise_search}>
                        <div>
                            <img src={hamburger} alt="menu" width="25" height="25" />
                            <input type="text" placeholder={places?.name} />

                        </div>
                        <div className={styles.patronise_submit_icons}>
                            <button><FaSearch /></button>
                            <img src={line} alt="line" />
                            <button><CgClose /></button>
                        </div>
                    </div>
                    <div className={styles.places_thumbnail}>
                        <img src={places?.thumbnail} alt="thumbnail" />
                    </div>
                </div>

                <div>
                    <div className={styles.places_header}>
                        <h2>{places?.name}</h2>
                        <p>
                            {places?.star_count}
                            <span>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </span>
                            299 reviews NN
                        </p>
                        <p>Fast food restaurant</p>
                    </div>
                    <div className={styles.places_quick_links}>
                        <div>
                            <p><FaDirections /></p>
                            <p>Directions</p>
                        </div>
                        <div>
                            <div>
                                <img src={save} alt="save" />
                            </div>
                            <p>Save</p>
                        </div>
                        <div>
                            <div>
                                <img src={marker} alt="nearby" />
                            </div>
                            <p>Nearby</p>
                        </div>
                        <div>
                            <div>
                                <img src={sharePhone} alt="share" />
                            </div>
                            <p>Send to your </p>
                            <p>phone</p>
                        </div>
                        <div>
                            <div>
                                <img src={share} alt="share" />
                            </div>
                            <p>Share</p>
                        </div>
                    </div>
                    <div className={styles.places_tags}>
                        <ul>
                            {places?.service_offered.map((service, index) => (
                                <li key={index}><BiCheck /> {service}.</li>
                            ))}
                        </ul>
                        <p><IoIosArrowForward /></p>
                    </div>
                    <div className={styles.places_details}>
                        <div>
                            <img alt="location marker" src={locationPosition} />
                            <p>{places?.address}</p>
                        </div>
                        <div>
                            <img src={clock} alt="clock" />
                            <div>
                                <p>{places?.open}</p>
                                <p>{places?.updated}</p>
                            </div>
                        </div>
                        <div>
                            <img src={globe} alt="globe" />
                            <p>{places?.website}</p>
                        </div>
                        <div>
                            <img src={phone} alt="phone" />
                            <p>{places?.phone}</p>
                        </div>
                        <div>
                            <img src={swirl} alt="swirl" />
                            <p>Q2XW+7W Port Harcourt</p>
                        </div>
                        <div>
                            <img src={shield} alt="shield" />
                            <p>Claim this business</p>
                        </div>
                    </div>
                    <div className={styles.places_edit}>

                        <button>Suggest on edit</button>
                    </div>

                </div>

            </section>
            <section>
                <img src={subMap} alt="sub map" />
            </section>
        </main>
    )
}

export default Places