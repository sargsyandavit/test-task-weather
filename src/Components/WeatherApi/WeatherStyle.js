import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Div = styled.div`
  
`;

export const Title = styled.h1`
  font-size: 23px;
  font-family: serif;
`;

export const SectionForecast = styled.div`
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

export const ForecastSearch = styled.div`
  width: 420px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const SearchHref = styled(Link)`
  height: 50px;
  padding: 0 30px;
  font-size: 16px;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
`;

export const BodyBlock = styled.div`
  width: 100%;
`;

export const WeatherSetings = styled.div`
  width: 500px;
  height: 450px;
  margin:  30px auto;
  background-color: #e2e2ed;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`;

export const HeadCloudsImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const Clouds = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CityName = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: darkblue;
`;

export const CloudsImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const DaysWeatherSection = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  border-radius: 10px;
  background-color: #e6e6e9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  ${props => props.isActive && css`
    display: none;
  `}
`;

export const WeatherSet = styled.div`
  width: 90%;
  height: 500px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  margin: 0 auto;
`;

export const DataSet = styled.div`
  width: 200px;
  height: 400px;
  background-color: blue;
  border-radius: 25px;
  background-color: #e2e2ed;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  text-align: center;
  line-height: 28px;
  color: darkblue;
`;

export const LatLonSection = styled.div`
  width: 80%;
  margin: 20px auto;
  line-height: 30px;
  color: darkblue;
`;

export const DateButonSet = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 65px;
  background-color: white;
  border-radius: 5px 100px 0px 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DayTimsWeathwer = styled.div`
  width: 80%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const DayWeathers = styled.div`
  width: 155px;
  height: 40px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background-color: blue;
`;

export const WeatherByHours = styled.div`
  width: 80%;
  /* height: 800px; */
  margin: 25px auto;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
  ${props => props.isActive && css`
    display: none;
  `}
`;

export const WeatherItems = styled.div`
  width: 250px;
  height: 350px;
  text-align: center;
  line-height: 28px;
  color: darkblue;
  background-color: #e2e2ed;
  border-radius: 50px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

export const CelcucByFaren = styled.div`
  width: 80%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Celcuc = styled.div`
  font-size: 25px;
  color: darkblue;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const ButtonSection = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchchButton = styled.button`
  width: 200px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  background-color: darkblue;
  cursor: pointer;
  color: white;
  font-weight: 600;
`;