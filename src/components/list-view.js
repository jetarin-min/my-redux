import React, { Component, PropTypes } from 'react'

export default class ListView extends Component {

    render() {

        return (
        	<table>
        		<thead>
	        		<tr>
	        			<th>Name</th>
	        			<th>Code</th>
	        			<th>Price</th>
	        		</tr>
	        	</thead>
	        	<tbody>
		        	{this.props.products.map(product =>
		        		<tr key={product._id}>
			        		<td>{product.name}</td>
			        		<td>{product.code}</td>
			        		<td>{product.price}</td>
		        		</tr>
					)}
        		</tbody>
        	</table>
        )
    }
}
/*
ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}
*/
