import axios from "axios";
import { useEffect, useState } from "react";

function People() {
  const [url, setUrl] = useState("https://swapi.dev/api/people");
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPrevUrl(res.data.previous);
        setNextUrl(res.data.next);
        setPeople(res.data.results);
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
            prevUrl ? "" : "disabled" //if prevUrl is null, then disable the button.
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
        <h1>People</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.height}</td>
                <td>{person.mass}</td>
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

export default People;
