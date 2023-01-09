import { useActivity } from "./hook/useActivity";
import { useSelector } from "react-redux";
import { useEffecting } from "./hook/useEffect";
import styles from "./activity.module.css";
import Alert from "../alert/Alert.js";

const initialInput = {
  name: "",
  difficulty: "",
  duration: "",
  season: "",
  countries: [],
};
const validations = (input) => {
  let errors = {};
  if (!input.name.trim()) {
    errors.name = "The 'Name' field is required";
  }
  return errors;
};

const Activity = () => {
  const {
    input,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    navigate,
    handleSelect,
    handleDelete,
    state,
    setState,
  } = useActivity(initialInput, validations);

  const countriesId = useSelector((state) => state.countries);
  useEffecting();

  return (
    <div className={styles.background}>
      {state && <Alert setState={setState} />}
      <div className={styles.div_container}>
        <button className={styles.btni} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <form onSubmit={handleSubmit}>
            <div className={styles.fiel}>
              <label className={styles.label}>Name</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Write the activity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={input.name}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div>
              <label className={styles.label}>Difficulty</label>
              <select
                className={styles.select_css}
                name="difficulty"
                value={input.difficulty}
                onChange={handleChange}
              >
                <option> Select </option>
                <option> very easy </option>
                <option> easy </option>
                <option> medium </option>
                <option> hard</option>
              </select>
            </div>
            <div>
              <label className={styles.label}>Duration</label>
              <select
                className={styles.select_css}
                name="duration"
                value={input.duration}
                onChange={handleChange}
              >
                <option> Select </option>
                <option> 1 Hrs</option>
                <option> 2 Hrs</option>
                <option> 3 Hrs</option>
                <option> 4 Hrs</option>
                <option> 5 Hrs </option>
                <option> 6 Hrs </option>
                <option> 7 Hrs </option>
                <option> 8 Hrs </option>
                <option> 9 Hrs </option>
                <option> 10 Hrs </option>
                <option> 11 Hrs </option>
                <option> 12 Hrs </option>
              </select>
            </div>
            <div>
              <label className={styles.label}>Season</label>
              <select
                className={styles.select_css}
                name="season"
                value={input.season}
                onChange={handleChange}
              >
                <option> Select </option>
                <option> Spring </option>
                <option> Summer</option>
                <option> Autumn </option>
                <option> Winter</option>
              </select>
            </div>
            <div>
              <label className={styles.label}>Choose a country</label>
              <select className={styles.select_css} onChange={handleSelect}>
                <option value=""> Select </option>
                {countriesId.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.div_id}>
              {input.countries &&
                input.countries?.map((x) => (
                  <div className={styles.id_country} key={x.id}>
                    <h5>{x}</h5>
                    <button
                      className={styles.btn_delete}
                      key="button_delete"
                      type="button"
                      onClick={() => handleDelete(x)}
                    >
                      X
                    </button>
                  </div>
                ))}
            </div>
            <div>
              <button
                className={styles.btn}
                type="submit"
                disabled={
                  !input.name ||
                  !input.difficulty ||
                  input.difficulty === "Select" ||
                  !input.duration ||
                  input.duration === "Select" ||
                  !input.season ||
                  input.season === "Select" ||
                  input.countries === "Select"
                }
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activity;
