export default function productsReducer(state=[], action) {
	console.log("This productsReducer was called when state: ",state," and action: ",action)
	switch(action.type){
		case 'ADD_PRODUCT':
			return [
				...state,
				action.product
			]
		case 'GET_PRODUCTS_SUCCESS':
			return [
				...state,
				...action.result.data
			]
		default:
			return state
	}
	/*
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
	*/
}