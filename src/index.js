import App from './App'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'

// ReactDOM.render(

//     < Router>
//       <Provider store={store}>
//         <ChakraProvider>
//           <App />
//         </ChakraProvider>
//       </Provider>
//     </ Router>,

//   document.getElementById('root'),
// );
const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </Router>
);