import bid from "../../store/Bid/bid.json";
import { IconContext } from "react-icons";
import { BsStarFill } from "react-icons/bs";
import { MdThumbDown } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiCheckCircle } from "react-icons/fi";
import styles from "../../styles/bid/Card.module.css"

interface bidData {
    title: string,
    description: string,
    tags: string[],
    details: {
        duration: string,
        rate: string,
        type: string,
        time_posted: string,
        rate_price: string,
    },
    proposals_count: string,
    amount: string,
    location: string,
    payment_type: string,

}

const Card = () => {



    const BidContent: React.FC<bidData> = ({ details, title, tags, description, proposals_count, amount, location, payment_type }: bidData, key) => {

        const { duration, rate, type, time_posted, rate_price } = details

        return (
            <div key={key} className={styles.bid_card_container} >
                <div>
                    <h4>{title}</h4>
                    <div className={styles.bid_card_icons}>
                        <p><MdThumbDown style={{ color: '#686868', fontSize: '1.2em' }} /></p>
                        <p><AiOutlineHeart style={{ color: '#686868', fontSize: '1.2em' }} /></p>
                    </div>
                </div>

                <div className={styles.bid_card_content}>
                    <div>
                        <p><span>{rate}:{rate_price}</span> - {type} Est. Time: {duration}</p>
                        <p>{time_posted}</p>
                    </div>
                    <p>{description}</p>
                    <ul className={styles.bid_tags}>
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        )
                        )
                        }
                    </ul>
                    <p>Proposals: {proposals_count}</p>

                    <ul className={styles.bid_sub_details}>
                        <IconContext.Provider value={{ className: 'bid_sub_icons' }}>
                            <li><FiCheckCircle className={`${styles.bid_check}`} />{payment_type}</li>
                            <li className={styles.bid_star}><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> </li>
                            <li>{amount}</li>
                            <li><HiOutlineLocationMarker style={{ marginRight: '0.4em', color: '#000' }} />{location}</li>
                        </IconContext.Provider>
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.bid_card}>
            {bid.map((data, i) => (
                <BidContent key={i} {...data} />
            )
            )}

        </div>
    )
}

export default Card