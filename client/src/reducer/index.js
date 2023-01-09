import {
  GET_COUNTRIES,
  GET_ACTIVITY,
  BY_CONTINENTS,
  BY_ACTIVITY,
  BY_POPULATIONS,
  GET_BY_NAME_COUNTRIES,
  GET_DETAIL_COUNTRIES,
  ORDER_BY_ALPHABETICAL,
  CREATE_ACTIVITY,
} from "../actions/index.js";
const initialState = {
  countries: [],
  allContinent: [],
  activities: [],
  detail: [],
  filter_Activities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allContinent: action.payload,
        filter_Activities: action.payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
      };

    case ORDER_BY_ALPHABETICAL:
      let sort = state.countries;
      sort =
        action.payload === "Asc"
          ? sort.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : sort.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });

      return {
        ...state,
        countries: [...sort],
      };
    case BY_POPULATIONS:
      let sortPopulation = state.countries;
      sortPopulation =
        action.payload === "max"
          ? sortPopulation.sort((a, b) => {
              if (a.population > b.population) return -1;
              if (a.population < b.population) return 1;
              return 0;
            })
          : sortPopulation.sort((a, b) => {
              if (a.population > b.population) return 1;
              if (a.population < b.population) return -1;
              return 0;
            });
      return {
        ...state,
        countries: [...sortPopulation],
      };

    case BY_CONTINENTS:
      const allContinent = state.allContinent;
      const continetFilter =
        action.payload === "all"
          ? allContinent
          : allContinent.filter((x) => x.continent === action.payload);
      return {
        ...state,
        countries: continetFilter,
      };

    case BY_ACTIVITY:
      let allActivities = state.filter_Activities;
      const all = state.countries;
      let filter =
        action.payload === ""
          ? all
          : allActivities.filter((x) =>
              x.Activities.find((e) => e.season === action.payload)
            );

      return {
        ...state,
        countries: filter,
      };

    case GET_BY_NAME_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_DETAIL_COUNTRIES:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
