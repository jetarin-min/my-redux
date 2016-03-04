import React from 'react';
import ReactDOM from 'react-dom';

const appEl = document.getElementById('app');

class MyClass extends React.Component {
	render(){
		return (<h1>Hello</h1>)
	}
}

ReactDOM.render(<MyClass/>, appEl);