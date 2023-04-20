import { useEffect, useState } from 'react';
import { Fragment } from "react";

import AddProductForm from './AddProductForm';

import axios from 'axios';
import ProductList from './ProductList';

function Main() {
    const baseUrl = 'http://localhost:8000/api/products'
    const [products, setProducts ] =useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        axios 
            .get(baseUrl) //since we have used async and await in the backend, we can use then and catch in the frontend
            .then((res) => {
                setProducts(res.data);
                setIsLoaded(true) //we have to make setIsLoaded to true since we got a successful route response in the .then,and that's how we know we got our products. After that, we have to add isLoaded && in the below return statement for the ProductList comp.
            })
            .catch((err) => console.error(err))
    }, [isLoaded]);//question to ask: when is the useEffect fires again?
    //if we don't fill the dependency array [] with isLoaded, we can't see the newly created product until we refresh the browser. Then, whenever we add one product, we have to flip it back to false. That means, we need our setIsLoaded in our AddProductForm (set down as prop)
    //
        
    return (
        <Fragment>
            <div className="row">
                <div className="col">
                    <AddProductForm setIsLoaded={setIsLoaded}/> 
                    {/* Since both AddProductForm and ProductList components/forms are displayed on the same page, we have to handle it this way. Otherwise, everytime we add a new product, we have to refresh the browser for the newly created product to show up on the table. We wouldn't have such problems if it was on a different page and different routes. But, since its on the same route rendered on the same view, we have to force the ProductList and re-rendered the newly created product on the page  */}
                </div>
                <div className="col">
                    {isLoaded && <ProductList products={products} setIsLoaded={setIsLoaded} />}
                </div>
                     {/* //if we don't pass the ProductList, we don't get the products listed in our table. That means, we have to grab them out of the props from the ProductList component which were passed as a parameter like this : function ProductList({ products }) */}
            </div>
        </Fragment>
    )
}


export default Main;