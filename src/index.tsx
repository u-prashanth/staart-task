import './normalize.css';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import { reducers } from './redux/state/reducers/RootReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(thunk))
)


const Root = () => (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)

ReactDOM.render(<Root />, document.getElementById('root'));
