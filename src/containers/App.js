import React from 'react'

import { Router, Link, Route, IndexRoute } from 'react-router'
import routes from '../routes'

import ProductsContainer from './ProductsContainer'
import NewFeed from './NewFeed'

//import ProductsContainer from './ProductsContainer'

export default class App extends React.Component{
	render() {
	    return (
	      <div>

	        <Router history={this.props.history}>
	            <Route path="/" component={NewFeed}/>
	            <Route path="/newfeed" component={NewFeed}/>
  				<Route path="/product" component={ProductsContainer}/>
	        </Router>
	      </div>
	    )
	}
}