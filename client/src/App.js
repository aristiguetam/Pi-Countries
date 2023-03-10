/** @format */

import Home from "./components/Home/Home.jsx";
import PrincipalRoute from "./components/PrincipalRoute/PrincipalRoute";
import Activity from "./components/Activity/Activity";
import DetailCountries from "./components/DetailCountries/DetailCountries";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import axios from "axios";
axios.defaults.baseURL = `http://localhost:3001/`;
// axios.defaults.baseURL = "https://pi-countries-production-f217.up.railway.app/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/principal" element={<PrincipalRoute />} />
        <Route path="/principal/:id" element={<DetailCountries />} />
        <Route path="/principal/activities" element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App;
