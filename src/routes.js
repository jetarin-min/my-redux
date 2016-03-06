import React from 'react'
import { Route } from 'react-router'
import ProductsContainer from './containers/ProductsContainer'
import NewFeed from './containers/NewFeed'

export default (
  <Route path="/" component={ProductsContainer}>
    <Route path="newfeed" component={NewFeed}/>
  	<Route path="product" component={ProductsContainer}/>
  </Route>
)
