import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.min.css';


import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store ,persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Router>
</Provider>

  </React.StrictMode>
);


