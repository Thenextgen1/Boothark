import { IconContext } from "react-icons";
import { TbWorld, TbLayoutGridAdd } from 'react-icons/tb'
import { AiOutlineClockCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import pencil from "../../assets/pencil.svg";
import suitcase from "../../assets/suitcase.svg";
import styles from "../../styles/Home.module.css";

const BidNav = () => {
    return (
        <div className={styles.bid_nav}>
            <IconContext.Provider value={{ className: 'bid-icons' }}>
                <div>
                    <h3>My Categories</h3>
                    <div className={styles.bid_content}>
                        <p>Other- Admin Support</p>
                        <p>Personal/Virtual Assistant</p>
                        <p>Web Research</p>
                        <p>Pro</p>
                        <img src={pencil} alt="pencil" width="21" height="21" />
                    </div>
                </div>
                <div>
                    <div className={styles.pencil_heading}>
                        <h3>Visibility </h3>
                        <img className={styles.pencil} src={pencil} alt="pencil" width="19" height="19" />

                    </div>

                    <p className={styles.bid_sub}>
                        <span>
                            <TbWorld className={`${styles.bid_icon}`} />
                        </span>

                        <span>
                            Public
                        </span>
                    </p>
                </div>
                <div>
                    <div className={styles.pencil_heading}>
                        <h3>Availability </h3>
                        <img className={styles.pencil} src={pencil} alt="pencil" width="19" height="19" />

                    </div>
                    <p className={styles.bid_sub}>
                        <span>
                            <AiOutlineClockCircle className={`${styles.bid_icon}`} />
                        </span>
                        <span>
                            More than 30hr/week
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Booth Completion</h3>
                    <div className={styles.bid_completion}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p>100%</p>
                    </div>
                    <p className={styles.bid_sub}>
                        <span>
                            <AiOutlinePlusCircle className={`${styles.bid_icon}`} />
                        </span>
                        <span>
                            Add Work History
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Inventory</h3>
                    <div className={styles.pencil_heading}>
                        <img className={styles.suitcase} src={suitcase} alt="suitcase" width="" height="" />
                        <p>My inventory</p>
                    </div>
                </div>
                <div>
                    <h3>Bids</h3>
                    <p className={styles.bid_sub}>
                        <span>
                            <TbLayoutGridAdd className={`${styles.bid_icon}`} />
                        </span>
                        <span>
                            50 available connects
                        </span>
                    </p>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default BidNav