import React from 'react'
import ProductsContainer from './ProductsContainer'

export default class App extends React.Component{
	render() {
	    return (
	      <div>
	        <h2>My App</h2>
	        <ProductsContainer />
	        <hr/>
	      </div>
	    )
	}
}