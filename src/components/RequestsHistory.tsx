import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styled from "styled-components";

import WeatherData from "../store/weatherData";

const History = styled.div`
  font-size: 30px;

  li {
    margin-top: 10px;
  }
`;

const RequestsHistory = observer(() => {
  const changeCurrentCity = (city: string) => {
    if (WeatherData.currentCity!.name !== city) {
      for (let i = 0; i < WeatherData.data.length; i += 1) {
        if (WeatherData.data[i].name === city) {
          WeatherData.currentCity = WeatherData.data[i];
        }
      }
    }
  };

  return (
    <History>
      <h2>History</h2>
      <ul>
        {WeatherData.historyOfCities!.map((item) => (
          <li key={item} onClick={() => changeCurrentCity(item)}>
            <Link to="/weather">{item}</Link>
          </li>
        ))}
      </ul>
    </History>
  );
});

export default RequestsHistory;
