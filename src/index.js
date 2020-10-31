import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/firebase';
import ColourPicker from './components/App/colour-picker';

// Render App components
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
    <ColourPicker />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
