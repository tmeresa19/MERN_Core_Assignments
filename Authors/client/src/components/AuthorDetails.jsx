/**
 * This is a React component that displays the details of a single author, including their name, and allows the user to edit or delete the author.
 * @returns The component returns the details of a single author, including their name and artist, as
 * well as buttons to edit or delete the author. The author's information is retrieved from an API
 * using the ID parameter from the URL route. If the author data is not yet loaded, the component will
 * not render anything.
 */
//since we are going to call our api here using the id that's in the route (i.e. when we click on the individual author link, it will take us to the details page. And in in the url, we see the id following the /author/. So we need to pull that id out of the route. For that, we need to use useParam)
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AuthorDetails({ baseUrl }) {
  // const param = useParams()
  const { id } = useParams();
  // console.log(id)
  const navigate = useNavigate()
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios
      //.get(baseUrl + '/' + id) I prefer to use the template literal instead of concatnating the id
      .get(`${baseUrl}/${id}`) //putting the value of baseUrl slash the value of id
      // .then((res) => console.log(res.data)) //once we get the data, we need to call useState to set the data instead of console logging the data
      .then((res) => setAuthor(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = () => { //why don't I need the id parameter inside the parenthesis? Because, I am on the details page of a author and it only displays one author
    axios 
      .delete(`${baseUrl}/${id}`)
      .then(res => {
        console.log(res.data)//after we log the deleted data, we navigate away to the all authors page
        navigate('/')

      })
      .catch((err) => console.error(err))
  }

  return (
    author && ( //by author &&, we mean to say that don't render the page unless there's author since we have initialized the useState as null

        <div className="card-body">
          <h3 className="card-title"> {author.name} </h3>
          <div className="card-footer d-flex justify-content-end gap-2">
            <Link to={`/edit/${id}`} className="btn btn-sm btn-warning">Edit</Link>
            <button onClick={handleDelete} className="btn btn-sm btn-danger">Delete</button>
          </div>
        </div>
    )
  );
}

export default AuthorDetails;
