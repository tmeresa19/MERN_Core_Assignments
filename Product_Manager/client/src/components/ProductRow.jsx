import { Link } from "react-router-dom";

import axios from "axios";

function ProductRow({ product, setIsLoaded}) { //we are going to get a product so we have to make sure that we have grabbed the product from prop. We just need to deconstruct it. Here, the product prop is considered as id since we are referring for one product
    const baseUrl = 'http://localhost:8000/api/products'

    const handleDelete = () => {
        //we are going to call axios to delete a product
        axios
            .delete(`${baseUrl}/${product._id}`) //since we don't have a payload, we don't need to put anything after the url. Note the _id 
            .then(res => {
                console.log(res.data)
                setIsLoaded(false)
            })
            .catch((err) => console.error(err))
    }
    return (
        <tr>
            <td><Link to={`/products/${product._id}`}>{product.productTitle}</Link></td> 
            <td>
                <button onClick={handleDelete} className="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default ProductRow;