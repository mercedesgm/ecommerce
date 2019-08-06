import axios from 'axios'

const GOT_PRODUCTS = 'GOT_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_STOCK = 'UPDATE_STOCK'

const defaultProducts = {};

const gotProducts = (products) => ({type: GOT_PRODUCTS, products})
const addProduct = (product) => ({type: ADD_PRODUCT, product})
const removeProduct = (productId) => ({type: REMOVE_PRODUCT, productId})
const updateStock = (productId, quantity) => ({type: UPDATE_STOCK, productId, quantity})

// ADD MUH THUNKS HERE

export default function (state = defaultProducts, action) {
    switch (action.type) {
        case GOT_PRODUCTS: 
            return action.products
        case ADD_PRODUCT:
            const id = action.product.id
            return {...state, id: action.product}
        case REMOVE_PRODUCT:
            return state.filter(item => item.id !== action.productId)
        case UPDATE_STOCK:
            const newState = {...state}
            newState[action.productId].quantity += quantity
            return newState
        default:
            return state
    }
}