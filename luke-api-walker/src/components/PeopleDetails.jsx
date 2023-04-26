import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PeopleDetails() {
  const { id } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    people && (
      <div className="card mb-3">
        <h1 className="card-header">{people.name}</h1>
        <img src={people.image} alt="" className="card-img-top" />
        <div className="card-body">
          <p>
            <strong>Height: </strong>
            {people.height}
          </p>
          <p>
            <strong>Mass: </strong>
            {people.mass}
          </p>
        </div>
      </div>
    )
  );
}

export default PeopleDetails;
