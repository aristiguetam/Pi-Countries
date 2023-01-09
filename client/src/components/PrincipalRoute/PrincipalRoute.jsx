import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../actions/index.js";
import Card from "../Card/Card";
import Paginated from "../paginated/Paginated";
import GetActivities from "../Activity/GetAtivities";
import ActivitySelect from "../By_Activity/ActivitySelect";
import styles from "./principal.module.css";
import Loading from "../loading/Loading";

const PrincipalRoute = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   dispatch(getCountries());
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCountries());
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countryPerPage; //9
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountry = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.container_titulo}>
        <h1> Countries </h1>{" "}
        <div className={styles.container_select_Activity}>
          <span>
            <GetActivities />
          </span>
          <span>
            <ActivitySelect />
          </span>
        </div>{" "}
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          {currentCountry?.map((country, index) => {
            return (
              <Card
                key={index}
                name={country.name}
                image={country.image}
                continent={country.continent}
                id={country.id}
              />
            );
          })}
        </div>
      )}
      <Paginated
        setCountryPerPage={setCountryPerPage}
        currentPage={currentPage}
        countryPerPage={countryPerPage}
        countries={countries.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PrincipalRoute;
