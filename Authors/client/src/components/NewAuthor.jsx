import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const initialAuthor = {
  name: "",
};

function NewAuthor({ baseUrl }) {
  //we need to deconstruct the baseUrl that we got from the parent (App.jsx) so that we can use it in the post method below. We pass these baseUrl to all the components since they all need it;

  const [author, setAuthor] = useState(initialAuthor);
  const [errors, setErrors] = useState({}); //we want to catch all of the errors in an object; hence, empty object as initial state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAuthor((prevAuthor) => ({
      ...prevAuthor,

      // computed property name
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    //we need the e to prevent the refreshing(submitting of a form
    e.preventDefault();
    // console.log('--------------> ', author)
    axios
      .post(baseUrl, author) //we will also pass the author as a payload
      .then((author) => {
        console.log(author); //we will redirect to the All Authors route when successfuly created
        navigate("/"); //Once we submit the form, we are going to navigate away from the form. So, we don't need to zero out the form
      })
      .catch((err) => {
        console.error(err);
        setErrors(err?.response?.data?.errors); //if we get errors, then we will set our err object with those Errors
        //we will also display our validation errors (except for the genre fields since they are optional)
      });
  };

  return (
    <div className="card">
      <h3 className="card-header">Add a New Author </h3>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Author Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={author.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="form-text text-danger">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="text-end gap-3 d-flex justify-content-end">
            <Link to="/">
              <button className="btn btn-primary">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default NewAuthor;
