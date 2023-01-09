import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAIL_COUNTRIES = "GET_DETAIL_COUNTRIES";
export const GET_BY_NAME_COUNTRIES = "GET_BY_NAME_COUNTRIES";
export const ORDER_BY_ALPHABETICAL = "ORDER_BY_ALPHABETICAL";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const BY_POPULATIONS = "BY_POPULATIONS";
export const BY_ACTIVITY = "BY_ACTIVITY";
export const BY_CONTINENTS = "BY_CONTINENTS";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

// const url = "/";
export function getCountries() {
  return async function (dispatch) {
    try {
      let res = await axios.get("/countries");
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const createactivity = (input) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("/activities", input);
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getActivity = () => {
  return async function (dispatch) {
    const res = await axios("/allactivities");
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data,
    });
  };
};

export const filterByContinent = (payload) => {
  return {
    type: BY_CONTINENTS,
    payload,
  };
};

export const orderByAlphabetical = (payload) => {
  return {
    type: ORDER_BY_ALPHABETICAL,
    payload,
  };
};

export const orderByPopulations = (payload) => {
  return {
    type: BY_POPULATIONS,
    payload,
  };
};

export const SearchByActivity = (payload) => {
  return {
    type: BY_ACTIVITY,
    payload,
  };
};

export const getCountrytoQuery = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/countries?name=${name}`);
      return dispatch({
        type: GET_BY_NAME_COUNTRIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailCountry = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/countries/${id}`);
      return dispatch({
        type: GET_DETAIL_COUNTRIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
