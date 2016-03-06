import React from 'react'

import { Router, Link, Route } from 'react-router'
import routes from '../routes'

import ProductsContainer from './ProductsContainer'
import NewFeed from './NewFeed'

//import ProductsContainer from './ProductsContainer'

export default class App extends React.Component{
	render() {
	    return (
	      <div>
	        <h2>My App</h2>
	        <Link to={"newfeed"}>New Feed</Link> {" "}|{" "}
	        <Link to={"product"}>Product</Link>
	        <hr/>
	        <Router history={this.props.history}>
	            <Route path="/newfeed" component={NewFeed}/>
  				<Route path="/product" component={ProductsContainer}/>
	        </Router>
	      </div>
	    )
	}
}