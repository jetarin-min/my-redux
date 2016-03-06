export default function productsReducer(state=[], action) {
	console.log("This productsReducer was called when state: ",state," and action: ",action)
	if(action.type=='ADD_PRODUCT'){
		return [
			...state,
			action.product
		]
	}
	else if (action.type=='GET_PRODUCTS_SUCCESS'){
		console.log("DATA:", action.result.data);
		return [
			...state,
			...action.result.data
		]
	}
	else {
		return state;
	}
}