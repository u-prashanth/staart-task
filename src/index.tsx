import './normalize.css';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';


const Root = () => (
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

ReactDOM.render(<Root />, document.getElementById('root'));
