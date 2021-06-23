import React from 'react';
import s from './WeatherBlock.module.css';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import WeatherData from '../../store/weatherData';
import WeatherChartSecond from '../WeatherChartSecond';

const WeatherBlock = observer((props) => {   

    return ( 
        <>
        <div className={ s.weatherBlock }> 
            <div>         
                <h2 className={ s.title }>{ WeatherData.currentCity.name }</h2>
                <p className={ s.date }>{ WeatherData.currentCity.date }</p>
                
                <div className={ s.mainInfo }>

                    <p>
                        <img src={"https://openweathermap.org/img/wn/" + WeatherData.currentCity.icon + "@2x.png"} 
                        alt='Weather logo' />
                    </p>

                    <div>
                        <p className={ s.temp }>
                            { WeatherData.currentCity.temp && Math.round(WeatherData.currentCity.temp - 273) }            
                            <span>&deg;</span>
                        </p>
                        <p className={ s.description }>{ WeatherData.currentCity.description }</p>                 
                    </div>
                </div>  
            </div> 

            <WeatherChartSecond />          
        </div>  
        
        <div className={ s.buttons }>
                <Link to="/more"> 
                    <button>Check another city</button>
                </Link>
                <Link to="/requests"> 
                    <button>See my history</button>
                </Link>
        </div>
        </>
    )
});

export default WeatherBlock;