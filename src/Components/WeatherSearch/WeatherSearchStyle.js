import styled from "styled-components";
import Select from "react-select";


export const SearchCitys = styled.div`
  width: 600px;
  height: 330px;
  margin: 30px auto;
  background: aliceblue;
  margin:  30px auto;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 525px) {
    width: 310px;
  }
`;

export const CityTitle = styled.p`
  font-size: 16px;
`;

export const SearchSection = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 525px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 220px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 0 5px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`;

export const SearchButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  font-size: 15px;
  font-family: serif;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  cursor: pointer;
  border: none;
  @media (max-width: 525px) {
    margin-top: 10px;
  }
`;

export const FindSitys = styled.div`
  width: 270px;
  height: 80px;
  background-color: white;
  margin: 0 auto;
  border-radius: 10px;
  overflow-x: auto;
  border: 2px solid aliceblue;

`;

export const SelectStyled = styled.input`
  width: 250px;
  height: 50px;
  border: 1px dashed darkblue;
  border-radius: 10px;
  padding: 0 6px;
  font-size: 20px;
  outline: none;
`;

export const SearchItem = styled.div`
  width: 200px;
  height: 55px;
  border-radius: 20px;
  margin: 10px 30px;
  font-weight: 600;
  font-size: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;