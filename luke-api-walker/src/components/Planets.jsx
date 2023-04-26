import axios from "axios";
import { useEffect, useState } from "react";

function Planets() {
  const [url, setUrl] = useState("https://swapi.dev/api/planets");
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPrevUrl(res.data.previous);
        setNextUrl(res.data.next);
        setPlanets(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [url]);

  const handlePrevClick = () => {
    setUrl(prevUrl);
  };

  const handleNextClick = () => {
    setUrl(nextUrl);
  };

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between">
        <button
          onClick={handlePrevClick}
          className={`btn btn-sm btn-outline-light ${
            prevUrl ? "" : "disabled"
          }`}
        >
          PREV
        </button>
        <button
          onClick={handleNextClick}
          className={`btn btn-sm btn-outline-light ${
            nextUrl ? "" : "disabled"
          }`}
        >
          NEXT
        </button>
      </div>
      <div className="card-body">
        <h1>Planets</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Terrain</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.terrain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          onClick={handlePrevClick}
          className={`btn btn-sm btn-outline-light ${
            prevUrl ? "" : "disabled"
          }`}
        >
          PREV
        </button>
        <button
          onClick={handleNextClick}
          className={`btn btn-sm btn-outline-light ${
            nextUrl ? "" : "disabled"
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Planets;
