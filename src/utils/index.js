import countryList from "react-select-country-list";
export const sortByDate = (arr) => arr.sort((a, b) => a.dt > b.dt ? 1 : (a.dt < b.dt ? -1 : 0));

export const convertToF = (celsius) =>  (celsius * 9/5 + 32).toFixed(0);

export const getDate = (date) => new Date(date).toString();


export const countries = countryList().getData();
