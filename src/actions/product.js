import Promise from 'bluebird'

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    xhr = null;

  }
  return xhr;
}

export const actions = {
  
    addProduct: function (product) {
        return {
            type: 'ADD_PRODUCT',
            product: product
        };
    },

    getProducts: function () {
		return {
			types: ['GET_PRODUCTS_REQUEST', 'GET_PRODUCTS_SUCCESS', 'GET_PRODUCTS_FAILURE'],
			promise: () => {
				return new Promise((resolve, reject) => {
					// Just simulating an async request to a server via a setTimeout
					/*
					setTimeout(() => {
					const d = new Date()
					const ms = ('000' + d.getMilliseconds()).slice(-3)
					resolve({
						time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
					})
					}, 2000)
					*/
					var xhr = createCORSRequest('GET', 'http://localhost:3000/api/product');
					if (!xhr) {
						console.log('CORS not supported');
					}
					xhr.onload = function() {
					var responseText = xhr.responseText;
						var jsonData = JSON.parse(responseText)
						if (jsonData.success) {
							resolve({data: jsonData.data});
						}
						else{
							reject({message: jsonData.message})
						}
					};

					xhr.onerror = function() {
						console.log('There was an error!');
						reject({message: 'There was an error!'})
					};

					xhr.send();
				})
			}
		}
    },

};
//export default actions