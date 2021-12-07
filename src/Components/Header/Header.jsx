import React from "react";
import {Header, Title, SectionForecast, ForecastSearch, SearchHref} from './HeaderStyle'

const HeaderPage = () => {
    return (
        <div>
        <Header>
        <Title>Weather App</Title>
       </Header>
       <SectionForecast>
        <ForecastSearch>
         <SearchHref
            href="/pageone"
            > WeatherForecast</SearchHref>
         <SearchHref
            href="pagetow"
            >SearchCity</SearchHref>
        </ForecastSearch>
       </SectionForecast>
       </div>
    );
}

export default HeaderPage;