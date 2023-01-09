import { Link } from "react-router-dom";
import styles from "./card.module.css";
const Card = ({ name, image, continent, id }) => {
  return (
    <div className="container">
      <article className={styles.article}>
        <Link
          style={{ color: "#000", textDecoration: "none" }}
          to={`/principal/${id}`}
          key={id}
        >
          <img src={image} alt={name} className={styles.img} />
        </Link>
        <div className={styles.content}>
          <h3> {name}</h3>
          <p>Continent: {continent}</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
