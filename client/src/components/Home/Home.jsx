import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
const Home = () => {
  const navigate = useNavigate();

  return (
    // <div className={styles.background}>
    <div className={styles.container}>
      <div className={styles.card}>
        <h1> Henry Countries</h1>
        <button className={styles.btn} onClick={() => navigate("principal")}>
          Begin
        </button>
      </div>
    </div>
  );
};

export default Home;
