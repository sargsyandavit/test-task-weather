import axios  from "axios";
//
// &appid=335a84c5d8a9c38378b8dfff3223b5d6
const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org'
});
const weatherDailiApi = axios.create({
    baseURL: 'https://pro.openweathermap.org/'
});

 const weatherServices =  {

    getCurrentWeather: async (latitude, longitude) => {
        const response = await weatherApi.get(
            `/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=50f09cc79a3aca3f4409adcdb4614f6d`
        );
           return response
    },

    getCurrentWeatherByCity: async (city) => {
        const response = await weatherApi.get(
            `/data/2.5/weather?q=${city}&mode=json&units=metric&appid=50f09cc79a3aca3f4409adcdb4614f6d`
        );
           return response
    },

    getweatherDataByCity: async (city) => {
        try {
        const response = await weatherApi.get(`/data/2.5/onecall?q=${city}?exclude=minutely,alerts&units=metric&appid=1a1efd9050dd9bb298579358ebb86198`)
        return response;
        } catch (e) {
            console.error(e)
        }
    },

    getFiviePraviousDaysWeather: async (latitude, longitude) => {
        try {
            const response = await weatherApi.get(`/data/2.5/onecall?exclude=minutely,alerts&units=metric&lat=${latitude}&lon=${longitude}&appid=1a1efd9050dd9bb298579358ebb86198
        `)
        return response;
        } catch (e) {
           console.log(e)
        }
    },

    getCurrentWeatherDataByCity: async (city) => {
        try {
        const response = await weatherApi.get(`/data/2.5/weather?q=${city}&lang=fr&appid=50f09cc79a3aca3f4409adcdb4614f6d`)
        return response;
        } catch (e) {
            console.error(e)
        }
    },
}

export default weatherServices;