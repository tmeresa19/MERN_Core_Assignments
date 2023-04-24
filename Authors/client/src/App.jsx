import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import AuthorList from "./components/AuthorList";
import AuthorDetails from "./components/AuthorDetails";
import NewAuthor from "./components/NewAuthor";
import EditAuthorForm from "./components/EditAuthorForm";
import Navbar from "./components/Navbar";


function App() {
    const baseUrl = 'http://localhost:8000/api/authors'

    return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AuthorList baseUrl={baseUrl} />} />
          <Route path="/authors/new" element={<NewAuthor baseUrl={baseUrl} />} />
          <Route path="/authors/:id" element={<AuthorDetails baseUrl={baseUrl} />} />
          <Route path="/authors/edit/:id" element={<EditAuthorForm baseUrl={baseUrl} />} />
        </Routes>
      </div>
    </Fragment>

    //Route components are self closers where as the Routes components have closing tags since they are wrappers
    //For Route component, we need at least two things: the path and element
    //the to prop of Navigate determines the destination as to where to navigate.
    //we need to map the /authors route with a component to be displayed when hitting /authors
    //the colon before the id (/authors/:id)makes it dynamic. So, don't forget
    //to make the Navbar to showup on everyone of the routes, how do we do that?
    //passed baseUrl as a prop to the AuthorList component


  );
}

export default App;
