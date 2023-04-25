import { Link, NavLink } from "react-router-dom"; //when we use React Router, we shouldn't use a--href tag instead use Link---to

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow mb-3">
      <div className="container">
        <h3>
          Favorite Authors
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/authors/new">
                Add an Author
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
