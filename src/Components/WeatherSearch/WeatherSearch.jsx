import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { countries } from "../../utils";
import { SelectStyled, ForecastSearch, SearchHref, SectionForecast, Title, SearchCitys, SearchInput, SearchButton, SearchSection, CityTitle, FindSitys } from "./WeatherSearchStyle";

const WeatherSearch = ({ weatherStore, ...reset }) => {
    const [city, setCity] = useState('');

   const handleChange = (value) => {
        setCity(value.label);
    }

    const handleUpdateCity = () => {
        console.log(weatherStore, reset, 'ssssssss')
        weatherStore.getweatherDataByCity(city);
    }

    return (
    <>
     <SearchCitys>
      <SearchSection>
      <SelectStyled onChange={handleChange} isSearchable options={countries} />
        <SearchButton onClick={handleUpdateCity}>SearchCity</SearchButton>
       </SearchSection>
     </SearchCitys>
     <FindSitys>
         
     </FindSitys>
    </>
    );
}

export default inject('weatherStore')(observer(WeatherSearch));