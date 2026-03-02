import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: []
}

const cartSlice = createSlice({
  name : "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload.id);

      if(!item){
        state.carts.push({...action.payload, quantity: 1})
      }else{
        item.quantity += 1
      }
    },

    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload)
    },

    increaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload)

      if(item){
        item.quantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload)

      if(item && item.quantity > 1){
        item.quantity -= 1
      }
    },

    clearCart: (state) => {
      state.carts = []
    }

  }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer