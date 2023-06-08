import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import WeatherData from "../store/weatherData";
import WeatherChart from "./WeatherChart";

const Weather = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 2px solid red;

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const WeatherBlock = observer((props) => {
  return (
    <>
      <Weather>
        <div>
          <h2>{WeatherData.currentCity.name}</h2>
          <p style={{ fontSize: "25px" }}>{WeatherData.currentCity.date}</p>

          <div
            style={{ display: "flex", alignItems: "center", padding: "20px" }}
          >
            <p>
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  WeatherData.currentCity.icon +
                  "@2x.png"
                }
                alt="Weather logo"
              />
            </p>

            <div>
              <p style={{ fontSize: "90px" }}>
                {WeatherData.currentCity.temp &&
                  Math.round(WeatherData.currentCity.temp - 273)}
                <span>&deg;</span>
              </p>
              <p>{WeatherData.currentCity.description}</p>
            </div>
          </div>
        </div>

        <WeatherChart />
      </Weather>

      <div style={{ marginTop: "auto" }}>
        <Link to="/more">
          <button>Check another city</button>
        </Link>
        <Link to="/requests">
          <button>See my history</button>
        </Link>
      </div>
    </>
  );
});

export default WeatherBlock;
