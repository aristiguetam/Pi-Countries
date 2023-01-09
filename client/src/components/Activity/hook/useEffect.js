import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../../actions";

export const useEffecting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return { useEffect };
};
