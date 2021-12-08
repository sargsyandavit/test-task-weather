import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
height: 80px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-family: serif;
  color: darkblue;
  font-weight: 800;
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
  @media (max-width: 400px) {
    width: 320px;
  }
`;

export const SearchHref = styled(Link)`
  color: white;
  width: 170px;
  height: 50px;
  font-size: 15px;
  background-color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 400px) {
    width: 150px;
    font-size: 15px;
    font-weight: 400;
  }
`;