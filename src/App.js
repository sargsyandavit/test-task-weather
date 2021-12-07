import './App.css';
import Weather from './Components/WeatherApi/Weather';
import WeatherSearch from './Components/WeatherSearch/WeatherSearch';
import { Provider } from 'mobx-react';
import store from './Store/store';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import HeaderPage from './Components/Header/Header';

function App() {

  return (
    <div>
      
      <Provider {...store}>
        <HeaderPage/>
      <BrowserRouter>
        <Routes>
          <Route path='/pageone' element={<Weather />} exact/>
          <Route path='/pagetow' element={<WeatherSearch/>} exact/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
