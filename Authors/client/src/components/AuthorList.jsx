import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AuthorList({ baseUrl }) {
  const [authors, setAuthors] = useState([]);
  const [isCurrent,  setIsCurrent] = useState(false) //if the list is current/latest, then ... (initially, the list is not current and set to false)

  useEffect(() => {
    axios
      .get(baseUrl) //we use a get request to list all the authors from db since this component is to list authors not to create
      .then((res) => {
        setAuthors(res.data)//we are going to catch the response from the backend. Then,take that response from the backend and setAuthors and display them in the below table
        setIsCurrent(true)// this means our list is now current after we get everything
      }) 
      .catch((err) => console.error(err));
  }, [isCurrent]); //set this dependency array 
  // console.log(isCurrent)

  const handleDelete = (id) => { //unlike for AuthorDetails component, AuthorList component needs id to be passed in to be deleted from the list of authors.
    axios
      .delete(`${baseUrl}/${id}`)
      .then(res => {
        console.log(res.data)
        setIsCurrent(false)
      })
      .catch((err) => console.error(err))
  }

  return (
    <table className="table">
      <thead>
        <th>Author Name</th>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author._id}>
            <td className="align-middle">
              <Link to={"/authors/" + author._id}>{author.name}</Link>
            </td>
            <td className="d-flex gap-2">
              <Link className="btn btn-sm btn-warning" to={`/authors/${author._id}/edit`}>Edit</Link>
              <button onClick={() => handleDelete(author._id)} className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AuthorList;

//How do we get all the authors from the database that was added in postman  to list them here in the AuthorList component?
//using states and an api call . The api call from axios will be residing inside useEffect hook
//we can grab the baseUrl prop which we passed to the AuthorList component inside the App component's routes
//in the table body, since we need one row for every author, we need to wrap up the row inside the map of our authors list/array
//<tbody>
//   {authors.map((author) => <tr key={author._id}></tr>)} //mapping over each author and returning a unique table row using the _id that mongoDB uses
// </tbody>
