import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivity } from "../../actions";
import styles from "./getActivities.module.css";
const GetActivities = () => {
  const dispatch = useDispatch();
  const activity = useSelector((state) => state.activities);
  // const handleGetActivities = (e) => {
  //   e.preventDefault();
  //   dispatch(getActivity());
  // };
  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);
  // console.log(activity);
  return (
    <div>
      <select className={styles.select_css}>
        <option>Activities</option>
        {activity && activity.length > 0 ? (
          activity.map((x) => <option> {x.name}</option>)
        ) : (
          <option>without activities</option>
        )}
      </select>
    </div>
  );
};

export default GetActivities;
