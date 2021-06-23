import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import s from './RequestsHistory.module.css';
import WeatherData from '../../store/weatherData';

const RequestsHistory = observer(() => {

    const changeCurrentCity = (city: string) => {
        if(WeatherData.currentCity && WeatherData.currentCity.name !== city) {            
            for (let i = 0; i < WeatherData.data.length; i += 1) {
                if(WeatherData.data[i].name === city) {
                    WeatherData.currentCity = WeatherData.data[i];
                }
            }
        }
    }

    return (
        <div>
                <h2>History</h2>
                <ul className={ s.list }>                
                    { WeatherData.historyOfCities &&
                     WeatherData.historyOfCities.length > 0 && 
                     WeatherData.historyOfCities.map((item, index) => 
                        <li key={ index } onClick = {() => changeCurrentCity(item)}>
                            <Link to='/weather'>
                                {item}
                            </Link>
                        </li>
                    )}                
                </ul>

        </div>
    )
});

export default RequestsHistory;
