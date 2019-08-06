import axios from 'axios'

const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const defaultCart = {}

export const gotCart = (cart) => ({type: GOT_USER_CART, cart})
export const addToCart = (item, quantity) => ({type: ADD_TO_CART, item, quantity})
export const removeFromCart = (itemId, quantity) => ({type: REMOVE_FROM_CART, itemId, quantity})

// ADD MUH THUNKS HERE

export const getCartFromLocalStorage = (dispatch) => {
    return dispatch => {

    }
}

export default function (state = defaultCart, action) {
    switch (action.type) {
        case GOT_CART:
            return {...state, ...action.cart}
        case GOT_CART_FROM_LOCALSTORAGE:
            return {...state, ...action.items}
        case ADD_TO_CART:
            let newState = {...state}
            const item = action.item
            if (newState[item.id]) {
                newState[item.id].quantity = newState[item.id].quantity + action.quantity
            } else {
                newState[item.id] = {...item, quantity: action.quantity}
            }
            window.localStorage.setItem('localCart', JSON.stringify(newState))
            return newState
        case MODIFY_QUANITY: 
            let newState = {...state}
            const id = action.itemId
            if (newState[id].quantity >= 1) {
                newState[id].quantity = newState[id].quantity + action.changeAmount
                if (newState[id].quantity < 1) {
                    delete newState[id]
                }
            } else {
                delete newState[id]
            }
            window.localStorage.setItem('localCart', JSON.stringify(newState))
            return newState
        default:
            return state
    }
}