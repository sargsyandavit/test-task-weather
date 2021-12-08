import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { convertToF, getDate } from "../../utils";
import { 
  CityName, 
  Clouds, 
  CloudsImg, 
  DataSet, 
  CheckBoxWrapper, 
  CheckBoxLabel, 
  CheckBox, 
  DaysWeatherSection, 
  HeadCloudsImg, 
  WeatherByHours, 
  WeatherItems, 
  WeatherSet, 
  WeatherSetings, 
  CelcucByFaren, 
  Celcuc, 
  LatLonSection, 
  SearchchButton, 
  ButtonSection, 
  Div, 
  BodyBlock 
} from "./WeatherStyle";

export const Weather = ({ weatherStore }) => {

  /**
   * Fetch weather FN.
   * @param {object} params 
   * lat and lon cordinait of user location.
   */
  const getUserWeather = async (params) => {
    try {
      await weatherStore.getFiviePraviousDays(params.coords.latitude, params.coords.longitude);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Fetch weather by city, FN.
   * @param {string} city 
   * name of user city.
   */
  const getWeatherForCity = async (city) => {
    try {
      await weatherStore.getFiviePraviousDays(city);
    } catch (e) {
      console.error(e);
    }
  }

  /** This effect get and set user data in first render. */
  useEffect(() => {
    if (!weatherStore.currentWeatherData?.byDays?.length) {
      window.navigator.geolocation.getCurrentPosition(getUserWeather, () => getWeatherForCity('Yerevan'));
    }
  }, []);

  /**
   * Show current weather by hours.
   */
  const handleGetByHours = () => {
    weatherStore.setIsActiveByhHours();
  };

  /**
   * Show current weather by days.
   */
  const handleGetByDays = () => {
    weatherStore.setIsActiveByDays();
  };


    return(
        <div>
          <BodyBlock>
          <WeatherSetings>
              <Clouds>
                <CityName>
                  {weatherStore.currentWeatherData.current?.weather?.[0]?.description}
                </CityName>
                <HeadCloudsImg 
                  src={`http://openweathermap.org/img/wn/${weatherStore?.currentWeatherData?.current?.weather?.[0]?.icon}@2x.png`} 
                />
              </Clouds>
              <CelcucByFaren>
              <Celcuc>
                {
                  weatherStore.isCelcius ?
                  `${weatherStore.currentWeatherData?.current?.main?.temp || 0} C` 
                  : `${convertToF(weatherStore.currentWeatherData?.current?.main?.temp || 0)} F`
                }
              </Celcuc>
              <CityName>{weatherStore.currentWeatherData.current?.name}</CityName>
              <CheckBoxWrapper>
                <CheckBox onChange={weatherStore.setIsCelcius} id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
              </CheckBoxWrapper>
              </CelcucByFaren>
              <LatLonSection>
                <Div>Lat: {weatherStore.currentWeatherData?.current?.coord?.lat}</Div>
                <Div>Lon: {weatherStore.currentWeatherData?.current?.coord?.lon}</Div>
                <Div>{getDate(new Date())}</Div>
              </LatLonSection>
              <ButtonSection>
                <SearchchButton onClick={handleGetByHours}>Search by hours</SearchchButton>
                <SearchchButton onClick={handleGetByDays}>Search by days</SearchchButton>
              </ButtonSection>
            </WeatherSetings>
          </BodyBlock>
          <DaysWeatherSection isActive={weatherStore.isActiveByDays}>
            <WeatherSet>
              {weatherStore.currentWeatherData.byDays?.map(day => (
                <DataSet key={day.dt}>
                  <CloudsImg  src={`http://openweathermap.org/img/wn/${day?.weather?.[0]?.icon}@2x.png`} />
                  <Div>{day?.weather?.[0]?.description}</Div>
                  <Div>
                    {
                      weatherStore.isCelcius ?
                      `${day?.feels_like.day || 0} C` 
                      : `${convertToF(day?.feels_like.day || 0)} F`
                    }
                  </Div>
                  <Div>{getDate(new Date(day.dt * 1000))}</Div>
                  <Div>
                    day: {day.feels_like.day}C<br />
                    eve:  {day.feels_like.eve}C<br />
                    morn:  {day.feels_like.morn}C<br />
                    night:  {day.feels_like.night}C<br />
                  </Div>
                </DataSet>
              ))}
            </WeatherSet>
          </DaysWeatherSection>
          <WeatherByHours isActive={weatherStore.isActiveByhHours}>
            {weatherStore.currentWeatherData.byHours?.map(hour => (
            <WeatherItems>
              <CloudsImg  src={`http://openweathermap.org/img/wn/${hour?.weather?.[0]?.icon}@2x.png`} />
              <Div>{hour?.weather?.[0]?.description}</Div>
              <Div>
                {
                  weatherStore.isCelcius ?
                  `${hour.temp || 0} C` 
                  : `${convertToF(hour.temp || 0)} F`
                }
              </Div>
              <Div>{getDate(new Date(hour.dt * 1000))}</Div>
            </WeatherItems>
          ))}
          </WeatherByHours>
        </div>
    )
}

export default inject('weatherStore')(observer(Weather));