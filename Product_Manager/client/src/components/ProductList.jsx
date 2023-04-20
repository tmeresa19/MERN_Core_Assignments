import ProductRow from "./ProductRow";

function ProductList({ products, setIsLoaded }) {
    return (
        <div className="card shadow">
            <h3 className="card-header">All Products</h3>
            <div className="card-body"></div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Title: </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((product) => (
                        <ProductRow key = {product._id} product = {product} setIsLoaded = {setIsLoaded}/>
                        ))} 
            
                </tbody>
            </table>
        </div>
        
    )
}


export default ProductList;