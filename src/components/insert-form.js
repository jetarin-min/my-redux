import React, { Component, PropTypes } from 'react'

export default class InsertForm extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("Form submit");
        this.props.onSubmit({
            name: this.refs.nameInput.value,
            price: this.refs.priceInput.value,
            code: this.refs.codeInput.value,
            _id: Math.floor(Date.now() / 1000)
        });
        this.refs.nameInput.value = "";
        this.refs.priceInput.value = "";
        this.refs.codeInput.value = "";

    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <p>Name</p>
                <input ref="nameInput" type="text"/><br/>
                <p>Code</p>
                <input ref="codeInput" type="text"/><br/>
                <p>Price</p>
                <input ref="priceInput" type="text"/><br/>
                <button type="submit">Add</button>
            </form>
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
