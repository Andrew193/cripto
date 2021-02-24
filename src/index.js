import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store"
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/getinfo',
  cache: new InMemoryCache()
});
// "start": "npm run build && (cd server && npm start)"
ReactDOM.render(
<ApolloProvider client={client}><Provider store={store}>
     <App />
</Provider></ApolloProvider>,document.getElementById('root'));


reportWebVitals();
