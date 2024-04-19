import { createSlice } from "@reduxjs/toolkit";
import { login } from "./UserAPI";

const initialState = {
    user: null,
    cart: [], //id name quantity, price, image
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // kiem tra san phẩm có trong giỏ hàng không
            const index = state.cart.findIndex(item => item._id.toString() == action.payload._id.toString())
            if (index >= 0) {
                state.cart[index].quantity += action.payload.quantity
            } else {
                state.cart = [...state.cart, action.payload]
            }
        },
        changeQuantity: (state, action) => {
            const index = state.cart
                .findIndex(item => item._id.toString() ==
                    action.payload._id.toString())
            if (index >= 0) {
                if (action.payload.quantity > 0) {
                    state.cart[index].quantity += action.payload.quantity
                } else if (action.payload.quantity < 0) {
                    // Giảm số lượng nhưng đảm bảo không nhỏ hơn 0
                    const newQuantity = state.cart[index].quantity + action.payload.quantity;
                    state.cart[index].quantity = newQuantity > 0 ? newQuantity : state.cart = state.cart.filter(item =>
                        item._id.toString() != action.payload._id.toString());
                }
                // else {
                //     state.cart[index].quantity += action.payload.quantity
                // }


            }
        },
        deleteItemFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload);
        },
        logout: (state, action) => {
            state.user = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            console.log("pending")
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        })

        builder.addCase(login.rejected, (state, action) => {
            console.log("rejected")
        })
    }
})


export const { addItemToCart, logout, changeQuantity, deleteItemFromCart } = appSlice.actions
export default appSlice.reducer
