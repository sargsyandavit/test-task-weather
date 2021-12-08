import React from "react";
import {Header, Title, SectionForecast, ForecastSearch, SearchHref} from './HeaderStyle';

const HeaderPage = () => {
    return (
        <>
            <Header>
                <Title>Weather App</Title>
            </Header>
            <SectionForecast>
                <ForecastSearch>
                <SearchHref
                    to="/"
                    > WeatherForecast</SearchHref>
                <SearchHref
                    to="/weatherSearch"
                    >SearchCity</SearchHref>
                </ForecastSearch>
            </SectionForecast>            
       </>
    );
}

export default HeaderPage;