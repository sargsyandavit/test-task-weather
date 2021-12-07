import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { convertToF, getDate } from "../../utils";
import { CityName, Clouds, CloudsImg, DataSet, CheckBoxWrapper, CheckBoxLabel, CheckBox, DaysWeatherSection, HeadCloudsImg, WeatherByHours, WeatherItems, WeatherSet, WeatherSetings, CelcucByFaren, Celcuc, LatLonSection } from "./WeatherStyle";
export const Weather = ({ weatherStore }) => {

  const getUserWeather = async (params) => {
    await weatherStore.getFiviePraviousDays(params.coords.latitude, params.coords.longitude)

  }

  const getWeatherForCity = async (city) => {
    await weatherStore.getFiviePraviousDays(city)
  }

  // const getFiveDaysDtat = async () => {
  //   await weatherStore.getFiviePraviousDays()
  // }


    useEffect(() => {
      if (!weatherStore.currentWeatherData.byDays.length) {
        window.navigator.geolocation.getCurrentPosition(getUserWeather, () => getWeatherForCity('Yerevan'));
      }
    }, []);


    return(
        <div>
          {console.log(toJS(weatherStore.getWeatherData), 'log')}
         <WeatherSetings>
            <Clouds>
              <CityName>{weatherStore.currentWeatherData.current?.weather?.[0]?.description}</CityName>
              <HeadCloudsImg  src={`http://openweathermap.org/img/wn/${weatherStore?.currentWeatherData?.current?.weather?.[0]?.icon}@2x.png`} />
            </Clouds>
            <CelcucByFaren>
            <Celcuc>
              {
                weatherStore.isCelcius ?
                `${weatherStore.currentWeatherData?.current?.main?.temp || 0} C` 
                : `${convertToF(weatherStore.currentWeatherData?.current?.main?.temp || 0)} F`
              }
              </Celcuc>
            <CheckBoxWrapper>
              <CheckBox onChange={weatherStore.setIsCelcius} id="checkbox" type="checkbox" />
              <CheckBoxLabel htmlFor="checkbox" />
           </CheckBoxWrapper>
            </CelcucByFaren>
            <LatLonSection>
              <section>Lat: {weatherStore.currentWeatherData?.current?.coord?.lat}</section>
              <section>Lon: {weatherStore.currentWeatherData?.current?.coord?.lon}</section>
              <div>{getDate(new Date())}</div>
            </LatLonSection>
          </WeatherSetings>
          <DaysWeatherSection>
            <WeatherSet>
              {weatherStore.currentWeatherData.byDays?.map(day => <DataSet>
                  
                  <CloudsImg  src={`http://openweathermap.org/img/wn/${day?.weather?.[0]?.icon}@2x.png`} />
                  <div>{day?.weather?.[0]?.description}</div>
                  <div>
                  {
                      weatherStore.isCelcius ?
                      `${day?.feels_like.day || 0} C` 
                      : `${convertToF(day?.feels_like.day || 0)} F`
                    }
                  </div>
                  <div>{getDate(new Date(day.dt * 1000))}</div>
                  <div>
                  day: {day.feels_like.day}C<br />
                  eve:  {day.feels_like.eve}C<br />
                  morn:  {day.feels_like.morn}C<br />
                  night:  {day.feels_like.night}C<br />
                  </div>
              </DataSet>)}
            </WeatherSet>
            {/* /* orer end */}
      
          </DaysWeatherSection>
          <WeatherByHours>
          {weatherStore.currentWeatherData.byHours?.map(hour => <WeatherItems>
                  <CloudsImg  src={`http://openweathermap.org/img/wn/${hour?.weather?.[0]?.icon}@2x.png`} />
                  <div>{hour?.weather?.[0]?.description}</div>
                  <div>
                  {
                      weatherStore.isCelcius ?
                      `${hour.temp || 0} C` 
                      : `${convertToF(hour.temp || 0)} F`
                    }
                  </div>
                  <div>{getDate(new Date(hour.dt * 1000))}</div>
          </WeatherItems>)}
            
          </WeatherByHours>
        </div>
    )
}

export default inject('weatherStore')(observer(Weather));