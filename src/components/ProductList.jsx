import {useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  {id: 1, name: "apple", price: 50, quantity: 2},
  {id: 2, name: "banana", price: 40, quantity: 4},
  {id: 3, name: "kiwi", price: 100, quantity: 2},
  {id: 4, name: "graphs", price: 60, quantity: 10}
]

function productList(){
  const dispatch = useDispatch()

  return(
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - {product.price}</p>

          <button onClick={() => dispatch(addToCart(product))}>Add to card</button>
        </div>
      ))}
    </div>
  )
} 

export default productList