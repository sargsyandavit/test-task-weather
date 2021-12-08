import './App.css';

import { Provider } from 'mobx-react';
import store from './Store/store';

import { BrowserRouter as Router } from "react-router-dom";
import HeaderPage from './Components/Header/Header';
import Content from './Pages/Content';

function App() {

  return (
      <Provider {...store} >
        <Router>
          <HeaderPage />
          <Content />
        </Router>
      </Provider>
  );
}

export default App;
