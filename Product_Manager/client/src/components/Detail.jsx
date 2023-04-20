//Since we want to grab the value of the id out of the route for the ProductRow component, then we have to import the useParam which we then need to deconstruct the id out of there
import axios from "axios";
import { useState, useEffect } from "react";

import {  Link, useParams } from "react-router-dom";

function Detail() {
  //Deconstruct the id here
  const { id } = useParams();
  //since now we got the id, we can use it to call the correct api using axios

  const baseUrl = "http://localhost:8000/api/products";

  //Do we need to use useState and useEffect? Yes, because, once this loads, we are going to call useEffect that will populate some states
  const [product, setProduct] = useState(null);

  useEffect(() => {
    //we are now going to grab that product from the api:
    axios
      .get(`${baseUrl}/${id}`) //since we need the id at the end of the url, we have to append the id as template literals (to make it dynamic, we have to wrap the id in curly braces).
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]); //So, id variable will be the BEST variable to put in our dependency array because whenever id changes, we get a new product.

  return (
    product && (
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <h3 className="card-header">{product.productTitle}</h3>
            <div className="card-body">
              
              <h5 className="card-title">This is {product.productTitle}!</h5>

              <p className="card-text">
                <strong>Price: </strong>
                {product.productPrice}
              </p>

              <p className="card-text">
                <strong>Description: </strong>
                {product.productDescription}
              </p>
            </div>
            <div className="card-footer text-end">
                <Link to = {`/products/${id}/edit`} className = "btn btn-sm btn-primary">
                    Edit Product
                </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
export default Detail;
