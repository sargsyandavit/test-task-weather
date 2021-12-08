/**
 * @file.
 * Contain Weather store.
 */
import { action, computed, makeAutoObservable, observable } from "mobx";
import weatherServices from "../Services/weatherApi";
import { sortByDate } from "../utils";

class WeatherStore {
  constructor() {
    makeAutoObservable(this, {
      weatherData: observable,
      currentWeatherData: observable,
      isCelcius: observable,
      isActiveByhHours: observable,
      isActiveByDays: observable,
      getweatherData: action,
      setIsCelcius: action,
      setIsActiveByhHours: action,
      setIsActiveByDays: action,
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

  isActiveByhHours = false;

  isActiveByDays = false;

  setIsCelcius = () => {
    this.isCelcius = !this.isCelcius ;
  }

  setIsActiveByhHours = () => {
    this.isActiveByhHours = !this.isActiveByhHours
  }

  setIsActiveByDays = () => {
    this.isActiveByDays = !this.isActiveByDays
  }

  getweatherDataByCity = async (city) => {
    try {
      const currentWearther = await weatherServices.getCurrentWeatherByCity(city);
      const respnse = await weatherServices.getFiviePraviousDaysWeather(currentWearther.data.coord.lat, currentWearther.data.coord.lon);
      this.currentWeatherData = {current: currentWearther.data, byDays: sortByDate(respnse.data.daily).slice(1, 6), byHours: sortByDate(respnse.data.hourly).slice(0, 23)};
      this.weatherData = sortByDate(respnse.data.daily).slice(0, 5)
    }catch (e) {
      console.error(e);
    }
  }
  
  getFiviePraviousDays = async (latitude, longitude) => {
    try {
     const currentWearther = await weatherServices.getCurrentWeather(latitude, longitude);
     const respnse = await weatherServices.getFiviePraviousDaysWeather(latitude, longitude);
     this.currentWeatherData = {current: currentWearther.data, byDays: sortByDate(respnse.data.daily).slice(1, 6), byHours: sortByDate(respnse.data.hourly).slice(0, 23)};
     this.weatherData = sortByDate(respnse.data.daily).slice(0, 5)
    }catch (e) {
      console.error(e)
    }
  }
}

export const weatherStore = new WeatherStore();