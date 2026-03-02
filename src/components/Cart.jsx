import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/cartSlice";

function Cart(){
  const carts = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch()

  const Total = carts.reduce((acc, cart) => acc+ cart.price * cart.quantity, 0)

  return(
    <div>
      <h2>Cart</h2>
      {carts.length === 0 && <p>cart is empty</p>}

      {carts.map((cart) => (
        <div key={cart.id}>
          <p>{cart.name}: {cart.price} X {cart.quantity}</p>

          <button onClick={() =>dispatch(increaseQuantity(cart.id))}>+</button>
          <button onClick={() =>dispatch(decreaseQuantity(cart.id))}>-</button>
          <button onClick={() =>dispatch(removeFromCart(cart.id))}>Delete</button>
        </div>
      ))}
      {carts.length > 0 &&
      <>
      <p> Total Price : ₹{Total}</p>

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </>
      }
    </div>
  )
}

export default Cart