import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { browserHistory } from 'react-router'


import App from './containers/App';
import configureStore from './stores/store';


var store = configureStore();
console.log(store.getState());

render(
	<Provider store={store}>
		<App history={browserHistory}/>
	</Provider>,
	document.getElementById('app')
);
