import React, { useRef, useEffect  } from 'react';
import { observer } from 'mobx-react-lite';
import { Chart } from 'react-chartjs-2';

import WeatherData from '../../store/weatherData';
import s from './WeatherChart.module.css';

const WeatherChart = () => {
    return (
        <p>1</p>
    )
}

export default WeatherChart


//const WeatherChart = observer((props) => {

    /*let currentChartData;
    let currentChartLabels;

    if(WeatherData.isDataLoaded) {

        currentChartData = WeatherData.currentCity.arrData;
        currentChartLabels = WeatherData.currentCity.arrLabels;

        console.log(currentChartData)
        console.log(currentChartLabels)
    }

    let canvasRef = useRef(null);    

    useEffect(() => {
        let canvas = canvasRef.current
        let context = canvas.getContext('2d')

        let cityChart;     
        
        if(cityChart) {
            cityChart.destroy();
        }

        cityChart = new Chart(context, {
            type: 'line',
    
            data: {
                labels: currentChartLabels,
                //labels: [1, 2, 3],
                datasets: [{
                    label: 'Weather legend',
                    backgroundColor: 'lightblue',
                    borderColor: 'lightblue',
                    data: currentChartData,
                    //data: [1, 2, 3]
                }]
            }, 
            options: {  
                responsive: true,
                maintainAspectRatio: false,
            }
        })            
      })  
      */
      
      
 /* return (
       <>
        <canvas id={WeatherData.currentCity.name} className={ s.chart } ref={ canvasRef } />  
       </>
  )  */ 

//});

//export default WeatherChart;