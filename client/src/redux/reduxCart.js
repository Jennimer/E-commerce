import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    name: "cart",
    products: [],
    quantity: 0,
    price: 0,
    size: "",
    total: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) =>
        {

            const productInCart = state.products.find((product) => product.id === action.payload.id);

            if (productInCart)
            {
                productInCart.quantity += action.payload.quantity;
                state.total += action.payload.price * action.payload.quantity;
            } else
            {
                state.total += action.payload.price * action.payload.quantity;
                state.products.push(action.payload);

            }
        },
        incrementQuantity: (state, action) =>
        {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++;
            state.total += item.price;
        },
        decrementQuantity: (state, action) =>
        {
            const item = state.products.find((item) => item.id === action.payload);
            if (item.quantity === 1)
            {
                state.products = state.products.filter((product) => product.id !== item.id);
                state.total -= item.price;

            } else
            {
                item.quantity--;
                state.total -= item.price;
            }
        },
        resetCart: (state) =>
        {
            state.total = 0
            state.products = []
        },
    },
});


export const { addProduct, removeProduct, resetCart, decrementQuantity, incrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;