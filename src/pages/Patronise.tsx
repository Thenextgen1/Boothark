import map from "../assets/maps.png";
import styles from "../styles/patronise/Patronise.module.css";

const Patronise = () => {


    return (
        <section>
            <img src={map} alt="map" className={styles.map} />
        </section>
    )
}

export default Patronise