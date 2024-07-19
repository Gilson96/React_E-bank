import ReactDOM from 'react-dom';
import App from './App'
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './store'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
        <Router>
        <Provider store={store}>
          <App />
          </Provider>
        </Router>    
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
