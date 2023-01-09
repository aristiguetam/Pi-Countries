import Home from "./components/Home/Home.jsx";
import PrincipalRoute from "./components/PrincipalRoute/PrincipalRoute";
import Activity from "./components/Activity/Activity";
import DetailCountries from "./components/DetailCountries/DetailCountries";
import { Routes, Route } from "react-router-dom";
import "./index.css";

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
