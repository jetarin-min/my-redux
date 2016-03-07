import React from 'react'
import { Link } from 'react-router'

export default class NewFeed extends React.Component{
	render() {
	    return (
	      <div>
	      	<h2>My App</h2>
	        <Link to={"newfeed"}>New Feed</Link> {" "}|{" "}
	        <Link to={"product"}>Product</Link>
	        <hr/>
	        <h2>NewFeed</h2>
	        <p>Lorem Ipsum</p>
	   		<br/>
	      </div>
	    )
	}
}