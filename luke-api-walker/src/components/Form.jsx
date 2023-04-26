import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [path, setPath] = useState({
    resource: "people",
    id: "1",
  });

  const handleChange = (e) => {
    setPath((prevPath) => ({ ...prevPath, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${path.resource}/${path.id}`);
  };

  return (
    <div className="container mb-3">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="d-flex gap-2 mb-3">
              <div className="flex-grow-1">
                <select
                  name="resource"
                  id="resource"
                  className="form-select"
                  value={path.resource}
                  onChange={handleChange}
                >
                  <option value="people">People</option>
                  <option value="planets">Planets</option>
                </select>
              </div>
              <div className="flex-shrink-1">
                <input
                  type="number"
                  name="id"
                  id="id"
                  className="form-control"
                  placeholder="ID"
                  value={path.id}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-outline-light">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
