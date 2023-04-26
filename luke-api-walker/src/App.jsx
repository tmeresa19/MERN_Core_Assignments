import { Fragment } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import People from "./components/People";
import PeopleDetails from "./components/PeopleDetails";
import LocationDetails from "./components/PlanetDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import Locations from "./components/Planets";
import PlanetDetails from "./components/PlanetDetails";
import Planets from "./components/Planets";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Form />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/people" />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleDetails />} />{" "}
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationDetails />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
