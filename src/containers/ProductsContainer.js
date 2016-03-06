import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/product'
import InsertForm from '../components/insert-form'

class ProductsContainer extends React.Component {
	onSubmit(product) {
		console.log("Container say:");
		console.log(product);
		this.props.actions.addProduct(product);
	}
	render() {
	    return (
			<div>
				<h3>This is Product box</h3>
				<InsertForm onSubmit={this.onSubmit}/>
				<h3>This is Products list</h3>
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
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)