import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import {productDetailsReducer, productListReducer} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,

})

const initialState = {
    cart: {cartItems:cartItemsFromStorage}
};
const middleware = [thunk];
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store
