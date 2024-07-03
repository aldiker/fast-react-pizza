import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     cart: [
//         {
//             pizzaId: 12,
//             name: 'Mediterranean',
//             unitPrice: 16,
//             quantity: 2,
//             totalPrice: 32,
//         },
//     ],
// };
const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload
            const existItem = state.cart.find(
                (item) => item.pizzaId === newItem.pizzaId,
            )
            if (existItem) {
                existItem.quantity++
                existItem.totalPrice = existItem.quantity * existItem.unitPrice
            } else {
                state.cart.push(newItem)
            }
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload,
            )
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload,
            )

            item.quantity++
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload,
            )

            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state, action) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCart = (state) => state.cart.cart

// 'reselct'
