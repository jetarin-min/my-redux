import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import * as actions from '../actions/product'
import { actions } from '../actions/product'
import InsertForm from '../components/insert-form'
import ListView from '../components/list-view'
import { Link } from 'react-router'


class ProductsContainer extends React.Component {
	constructor(){
		super();
		this.onSubmit = this.onSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		console.log("test btn clicked!!!");
		this.props.getProducts();

	}
	onSubmit(product) {
		console.log("Container say:");
		console.log(product);
		//this.props.actions.addProduct(product);
		console.log("Props:");
		console.log(this.props);
		//console.log(actions);
		console.log("ACTIONS");
		console.log(actions);
		this.props.addProduct(product);
	}
	render() {
	    return (
			<div>
				<h2>My App</h2>
	        	<Link to={"newfeed"}>New Feed</Link> {" "}|{" "}
	        	<Link to={"product"}>Product</Link>
	        	<hr/>
				<h3>This is Product box</h3>
				<InsertForm onSubmit={this.onSubmit}/>
				<h3>This is Products list</h3>
				<ListView products={this.props.products}/>
				<br/>
				<button onClick={this.handleClick}>Test</button>
			</div>
	    )
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

var mapDispatchToProps = function (dispatch) {
	return {
		//actions: bindActionCreators(actions, dispatch)
		addProduct: (product) => dispatch(actions.addProduct(product)),
		getProducts: () => dispatch(actions.getProducts())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)