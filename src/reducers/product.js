export default function productsReducer(state=[], action) {
	console.log("This productsReducer was called when state: ",state," and action: ",action)
	if(action.type=='ADD_PRODUCT'){
		return [
			...state,
			action.product
		]
	} else {
		return state;
	}
}