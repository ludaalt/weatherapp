import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styled from "styled-components";

import WeatherData from "../store/weatherData";

const HistoryList = styled.ul`
  width: 200px;
  height: 200px;
  font-size: 20px;

  li {
    margin-top: 10px;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const RequestsHistory = observer(() => {
  const changeCurrentCity = (city: string) => {
    if (WeatherData.currentCity && WeatherData.currentCity.name !== city) {
      for (let i = 0; i < WeatherData.data.length; i += 1) {
        if (WeatherData.data[i].name === city) {
          WeatherData.currentCity = WeatherData.data[i];
        }
      }
    }
  };

  return (
    <div>
      <h2>History</h2>
      <HistoryList>
        {WeatherData.historyOfCities &&
          WeatherData.historyOfCities.length > 0 &&
          WeatherData.historyOfCities.map((item, index) => (
            <li key={index} onClick={() => changeCurrentCity(item)}>
              <Link to="/weather">{item}</Link>
            </li>
          ))}
      </HistoryList>
    </div>
  );
});

export default RequestsHistory;
