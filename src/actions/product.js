var actions = {
  
    addProduct: function (product) {
        return {
            type: 'ADD_PRODUCT',
            product: product
        };
    },

};
export default actions