	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap/dist/css/bootstrap-theme.css';
	import React from 'react';
	import ReactDOM from 'react-dom';
	import './index.css';
	import App from './App';
	import registerServiceWorker from './registerServiceWorker';
	import { initWeb3 } from './utils/web3.js';

		initWeb3().then(() => {
		  ReactDOM.render(<App />, document.getElementById('root'));
		registerServiceWorker();
		});
