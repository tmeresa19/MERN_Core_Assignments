import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const initialAuthor = {
  name: "",
};

function EditAuthor({ baseUrl }) {
  //we need to deconstruct the baseUrl that we got from the parent (App.jsx) so that we can use it in the post method below. We pass these baseUrl to all the components since they all need it;

  const { id } = useParams();
  const [author, setAuthor] = useState(initialAuthor);
  const [errors, setErrors] = useState({}); //we want to catch all of the errors in an object; hence, empty object as initial state
  const navigate = useNavigate();

  useEffect(() => {
    axios
      //.get(baseUrl + '/' + id) I prefer to use the template literal instead of concatnating the id
      .get(`${baseUrl}/${id}`) //putting the value of baseUrl slash the value of id
      // .then((res) => console.log(res.data)) //once we get the data, we need to call useState to set the data instead of console logging the data
      .then((res) => setAuthor(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setAuthor((prevAuthor) => ({
      ...prevAuthor,

      // computed property name
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    //we need the e to prevent the refreshing9submitting of a form
    e.preventDefault();
    // console.log('--------------> ', author)
    axios
      .put(`${baseUrl}/${id}`, author) //using the put method, we will also pass the author as a payload and id of that specific author to be updated
      .then((author) => {
        console.log(author); //we will redirect to the All Authors route when successfuly created
        setErrors({});
        navigate(`/authors/${id}`); //Once we submit the form, we are going to navigate away from the form. So, we don't need to zero out the form
      })
      .catch((err) => {
        console.error(err);
        setErrors(err?.response?.data?.errors); //if we get errors, then we will set our err object with those Errors
        //we will also display our validation errors (except for the genre fields since they are optional)
      });
  };

  return (
    <div className="card">
      <h3 className="card-header">Edit this Author </h3>
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
export default EditAuthor;
