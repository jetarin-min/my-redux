import { combineReducers } from 'redux'
import productsReducer from './product.js'

export default combineReducers({
	products: productsReducer
})