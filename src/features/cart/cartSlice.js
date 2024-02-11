import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    cart: localStorage.getItem("cart") ? [...JSON.parse(localStorage.getItem("cart"))] : [],
    cartLength: Number(localStorage.getItem("length") ? localStorage.getItem("length") : 1),
}


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addItem(state, action) {
                
                let cart = JSON.parse(localStorage.getItem("cart"));
                let flag = 0;
                
                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].item.id == action.payload.item.id) {
                        cart[i].count += Number(action.payload.count);
                        state.cartLength += Number(action.payload.count);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        localStorage.setItem("length", state.cartLength);
                        flag = 1;
                        break;
                    }
                }
                if (flag === 0) {
                    state.cart.push({ item: action.payload.item, count: Number(action.payload.count) });
                    state.cartLength += Number(action.payload.count);
                    console.log(state.cartLength)
                    localStorage.setItem("cart", JSON.stringify(state.cart));
                    localStorage.setItem("length",  state.cartLength);
                } else localStorage.setItem("cart", JSON.stringify(cart)), state.cart = cart;
            },
            deleteItem(state, action) {
                for(let i=0 ; i<state.cart.length    ; i++){
                    if(state.cart[i].item.id==action.payload){
                        state.cartLength -= state.cart[i].count;
                        state.cart[i].count = 0;
                        localStorage.setItem("length", state.cartLength);
                    }
                }
                state.cart = state.cart.filter(item => {
                    return item.item.id !== action.payload
                })

                localStorage.setItem("cart", JSON.stringify(state.cart));
            },
            clearCart(state) {
                state.cart = [];
                localStorage.setItem("cart", JSON.stringify(state.cart));
                state.cartLength=0;
                localStorage.setItem("length",0);
            },
        }
    }

)

export const getCart = (state) => state.cart;
export const getCartLength = (state) => state.cartLength;
export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;