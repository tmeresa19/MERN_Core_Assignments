import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res);
        setPlanet(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    planet && (
      <div className="card mb-3">
        <h1 className="card-header">{planet.name}</h1>
        <div className="card-body">
          <p>
            <strong>Terrain: </strong>
            {planet.terrain}
          </p>
          <p>
            <strong>Climate: </strong>
            {planet.climate}
          </p>
        </div>
      </div>
    )
  );
}

export default PlanetDetails;
