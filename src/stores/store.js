import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import promiseMiddleware from '../middlewares/promise-middleware'
import thunkMiddleware from '../middlewares/thunk-middleware'

export default function configureStore() {
	return createStore(reducers, applyMiddleware(promiseMiddleware));
	/*
	const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
	return finalCreateStore(reducers)
	*/
}