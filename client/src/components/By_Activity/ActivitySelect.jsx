import { useDispatch } from "react-redux";
import { SearchByActivity } from "../../actions";
import styles from "./activitySelect.module.css";

const ActivitySelect = () => {
  const dispatch = useDispatch();

  const handleFilterByActivity = (e) => {
    dispatch(SearchByActivity(e.target.value));
  };

  return (
    <div>
      <select className={styles.select_css} onChange={handleFilterByActivity}>
        <option value="">Activity season</option>
        <option value="Spring" key="Spring">
          Spring
        </option>
        <option value="Summer" key="Summer">
          Summer
        </option>
        <option value="Autumn" key="Autumn">
          Autumn
        </option>
        <option Value="Winter" key="Winter">
          Winter
        </option>
      </select>
    </div>
  );
};

export default ActivitySelect;
