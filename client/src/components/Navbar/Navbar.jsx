import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SvgComponent from "./Svg";
import {
  filterByContinent,
  orderByAlphabetical,
  getCountrytoQuery,
  orderByPopulations,
} from "../../actions";
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(getCountrytoQuery(input));
      setInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCountrytoQuery(input));
    setInput("");
  };

  const handleFilterContinent = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

  const handlePopulations = (e) => {
    dispatch(orderByPopulations(e.target.value));
  };

  const handleAlfhabetical = (e) => {
    dispatch(orderByAlphabetical(e.target.value));
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <button className={styles.btni} onClick={() => navigate(-1)}>
            Go back
          </button>
          <div className={styles.search}>
            <label className={styles.svg}>
              <SvgComponent />
            </label>
            <input
              type="text"
              name="search"
              value={input}
              placeholder="Country"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className={styles.btn} type="submit" onClick={handleSubmit}>
              Search
            </button>
          </div>
          <header className={styles.header}>
            <select
              className={styles.select_css}
              onChange={handleFilterContinent}
            >
              <option value="all">Continents</option>
              <option value="all" key="all">
                all Continent
              </option>
              <option value="Africa" key="Africa">
                Africa
              </option>
              <option value="Antarctic" key="Antarctica">
                Antarctica
              </option>
              <option value="Asia" key="Asia">
                Asia
              </option>
              <option value="Europe" key="Europe">
                Europe
              </option>
              <option value="Americas" key="America">
                America
              </option>
              <option value="Oceania" key="Oceania">
                Oceania
              </option>
            </select>

            <select className={styles.select_css} onChange={handlePopulations}>
              <option>Popularity</option>
              <option value="max" key="max">
                Mas populares
              </option>
              <option value="min" key="min">
                menos populares
              </option>
            </select>
            <select className={styles.select_css} onChange={handleAlfhabetical}>
              <option>Alphabetical</option>
              <option value="Asc" key="Asc">
                Ascendants
              </option>
              <option value="Desc" key="Desc">
                Descendants
              </option>
            </select>
          </header>
        </div>
      </nav>
      <div className={styles.btn_created}>
        <button
          className={styles.btnA}
          onClick={() => navigate("/principal/activities")}
        >
          Create Activity
        </button>
      </div>
    </>
  );
};

export default Navbar;
