import { useRef, useState, useEffect } from "react"; //useRef is mostly used to give adog form control focus to input fields when it loads

import axios from 'axios'

//since we have lots of fields, we don't have to create one piece of state for every field. So,
//we can use an object as our state

const initialProduct = {
  productTitle: "",
  productPrice: "",
  productDescription: "",
};

function AddProductForm({setIsLoaded}) { //deconstruct setIsLoaded)
  const nameInputRef = useRef()
  const [product, setProduct] = useState(initialProduct); //this will help us to set initialProduct in the submit as well

  useEffect(() => {
    nameInputRef.current.focus() //The element that you store as your ref will be in a property of nameInputRef called current , focus. Then the user doesn't have to click on the name field 

  }, [])

  const handleChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct, //...prevProduct?
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', product) 
      .then((res) => console.log(res.data))
      .catch(err => console.error(err))
    setProduct(initialProduct); //after adding the product by clicking/submitting the add product button, then clear the form back to its initial state
    setIsLoaded(false); //sfter adding/creating the product, set isLoaded to false (flip it to false back to its initial value)
  };


  return (

    <div className="card shadow mb-3">
      <h3 className="card-header">Add Product</h3>
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
              ref={nameInputRef}//nameInputRef is ref prop. Now, react knows about this input field. And as soon as the page loads, we can call useEffect 
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
              value={product.productPrice}
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
            <button type="submit" className="btn btn-primary">Create Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
