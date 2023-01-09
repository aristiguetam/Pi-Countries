import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailCountry } from "../../actions";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./detail.module.css";
import Loading from "../loading/Loading";
import { useState } from "react";

const DetailCountries = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detailCountries = useSelector((state) => state.detail);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   dispatch(detailCountry(id));
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, [id, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(detailCountry(id));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, dispatch]);
  return (
    <div className={styles.background}>
      <div className={styles.divbtn}>
        <button className={styles.btn} onClick={() => navigate(-1)}>
          Back!
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.article}>
            <img
              className={styles.img}
              alt={detailCountries.id}
              src={detailCountries.image}
            />
          </div>

          <div className={styles.letter}>
            <h2>{detailCountries.name}</h2>
            <p>Continent: {detailCountries.continent}</p>
            <p>Capital: {detailCountries.capital}</p>
            <p>Popularity: {detailCountries.population}</p>
            <p>Region: {detailCountries.subregion}</p>
            <p>Area: {detailCountries.area}</p>
          </div>
        </div>
      )}
      {loading ? (
        <span></span>
      ) : (
        <div className={styles.container_Activities}>
          <div className={styles.div_}>
            {detailCountries.Activities &&
            detailCountries.Activities.length > 0 ? (
              detailCountries.Activities?.map((x) => {
                return (
                  <div key={x.id} className={styles.div_activities}>
                    <h2>Activity:</h2>
                    <p>Name: {x.name}</p>
                    <p>Difficulty: {x.difficulty}</p>
                    <p>Duration: {x.duration}</p>
                    <p>Season: {x.season}</p>
                  </div>
                );
              })
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailCountries;
