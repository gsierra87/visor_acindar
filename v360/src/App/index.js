import React from 'react';
import { AppUI } from '../App/AppUI.js';
import { Provider } from '../components/AppContext/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <AppUI />
  </Provider>
  );
}
 
export default App;
