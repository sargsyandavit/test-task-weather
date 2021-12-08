import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { countries } from "../../utils";
import { SelectStyled, SearchCitys, SearchButton, SearchSection, FindSitys, SearchItem } from "./WeatherSearchStyle";

const WeatherSearch = ({ weatherStore, ...reset }) => {
    const [city, setCity] = useState('');
    const [citynmae, setCityname] = useState('');

   const handleChange = (ev) => {
        setCity(ev.target.value);
    }

    const handleUpdateCity = () => {
        console.log(weatherStore, reset, 'ssssssss')
        weatherStore.getweatherDataByCity(city);
        setCityname(city);
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
         <SearchItem><Link to="/">{citynmae}</Link> </SearchItem>
     </FindSitys>
    </>
    );
}

export default inject('weatherStore')(observer(WeatherSearch));