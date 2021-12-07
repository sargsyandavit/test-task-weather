import { action, computed, makeAutoObservable, observable } from "mobx";
import weatherServices from "../Services/weatherApi";
import { sortByDate } from "../utils";

class WeatherStore {
  constructor() {
    makeAutoObservable(this, {
      weatherData: observable,
      currentWeatherData: observable,
      isCelcius: observable,
      getweatherData: action,
      setIsCelcius: action,
      getWeatherData: computed,
    })
  }
  currentWeatherData = {
    current: {},
    byHours: [],
    byDays: [],
  }

  weatherData = [];

  isCelcius = true;

  setIsCelcius = () => {
    this.isCelcius = !this.isCelcius ;
  }

  getweatherDataByCity = async (city) => {
    try {
      const currentWearther = await weatherServices.getCurrentWeatherByCity(city);
      const respnse = await weatherServices.getFiviePraviousDaysWeather(currentWearther.data.coord.lat, currentWearther.data.coord.lon);
      this.currentWeatherData = {current: currentWearther.data.current, byHours: sortByDate(respnse.data.hourly).slice(0, 23)};
      this.weatherData = sortByDate(respnse.data.daily).slice(0, 5)
    } catch (e) {
      console.error(e);
    }
  }
  
  getFiviePraviousDays = async (latitude, longitude) => {
    try {
      const currentWearther = await weatherServices.getCurrentWeather(latitude, longitude);
      const respnse = await weatherServices.getFiviePraviousDaysWeather(latitude, longitude);
      console.log(respnse, 'fivedayssssssssssssssssssssssssssssssssssssssssssssss')
     this.currentWeatherData = {current: currentWearther.data, byDays: sortByDate(respnse.data.daily).slice(1, 6), byHours: sortByDate(respnse.data.hourly).slice(0, 23)};
     this.weatherData = sortByDate(respnse.data.daily).slice(0, 5)
    //  this.weatherData = respnse.data
    }catch (e) {
      console.error(e)
    }
  }

}

export const weatherStore = new WeatherStore();