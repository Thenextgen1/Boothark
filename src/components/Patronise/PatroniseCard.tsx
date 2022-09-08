import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { patronise } from "../../store/Patronise/patronise";
import styles from "../../styles/patronise/PatroniseCard.module.css"

interface patroniseData {
    name: string;
    star_count: number | string;
    rate_count: number;
    location: string;
    period: string;
    thumbnail: string;
    service_offered: string[];
}



const PatroniseCard = () => {

    const PatroniseContent: React.FC<patroniseData> = ({ name, star_count, rate_count, location, period, service_offered, thumbnail }: patroniseData, key) => {
        return (
            <Link to={`/places/${name}`} key={key}>
                <div key={key} className={styles.patronise_card}>

                    <div>
                        <h3>{name}</h3>
                        <p>
                            {star_count}
                            <span>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </span>
                            ({rate_count})
                        </p>
                        <p>{location}</p>
                        <p>{period}</p>
                        <ul>
                            {service_offered.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src={thumbnail} alt="thumbnail" />
                    </div>

                </div>
            </Link >
        )

    }
    return (
        <div className={styles.patronise_card_container}>
            {patronise.map((patronise, index) => (
                <PatroniseContent {...patronise} key={index} />
            ))}
        </div>
    )
}

export default PatroniseCard