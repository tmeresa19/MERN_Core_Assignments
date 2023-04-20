import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
//we have to use useEffect since we have to pre-populate the form (get the right product to update)

import axios from 'axios'

function EditProductForm() {
  const {id} = useParams();
  const navigate = useNavigate(); //to navigate away or to redirect the user
  const [product, setProduct] = useState(null); //since we are editing the form, we have to change the value of useState to null from initialvalue
  const baseUrl = 'http://localhost:8000/api/products'


  //right after our component got loads, we need the useEffect to grab that product to be updated from the api
  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)//this will give us the right product
      .then(res => setProduct(res.data))//take that successful response and set our product to the data of that response i.e. setProduct(res.data)
      .catch((err) => console.error(err));

  }, [id]);


  const handleChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct, //...prevProduct?
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${baseUrl}/${id}`, product) //we need the id since we are updating a specific product and give them the product as a payload of our api request 
      .then((res) => { //this line has to be a two liner code: one is to ...and the other is to navigate away after clicking edit button
        console.log(res.data)
        navigate('/products');
      }) 
      .catch(err => console.error(err))
    // setIsLoaded(false)//we don't need this since we are on a different page
  };


  return (
    product && (
      //we don't want to render the below unless we have a product. Hence, adding the above lien of code i.e. product &&
    <div className="card shadow">
      <h3 className="card-header">Edit your Product</h3>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="productTitle"
              id="productTitle"
              className="form-control"
              value={product.productTitle}
              onChange={handleChange}
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="productPrice"
              id="productPrice"
              className="form-control"
              value={product.productAge}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Description:
            </label>
            <textarea
              name="productDescription"
              id="productDescription"
              className="form-control"
              value={product.productDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Edit Product</button>
          </div>
        </form>
      </div>
    </div>
  ));
}

export default EditProductForm;
