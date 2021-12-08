import React from "react";
import { Route,Routes   } from 'react-router-dom'

import Weather from '../Components/WeatherApi/Weather';
import WeatherSearch from '../Components/WeatherSearch/WeatherSearch';

const Content = () => {
    return (
        <Routes>
            <Route path='/' element={<Weather/>}/>
            <Route path='/weatherSearch' element={<WeatherSearch/>}/>
        </Routes>
    )
};

export default Content;