import { makeAutoObservable, action } from 'mobx';

//import { getCurrentDate } from '../services/utils';

type City = { 
    name?: string, 
    temp?: number,
    description?: string,
    icon?: string,
    arrLabels?: Array<string>,
    arrData?: Array<number>,
    date?: string,
}

//type keyValue<T> = [{string: { [key: string]: string }, T[]]; 

interface IForecastListItem {
    [key: string]: string | any
 }

class WeatherData {
    data: Array<City> = [];
    currentCity: City = {};
    historyOfCities: Array<string> = [];

    isDataLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    getWeather(city: string) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87f5d13b44c8132c840c1ae0241f180c`)
        .then(response => {
            if(response) return response.json()
        })
        .then(action(json => {

            if(!this.historyOfCities.includes(json.name)) {
                this.historyOfCities.push(json.name)
            }

            const obj: City = {};

            obj.name = json.name;
            obj.temp = json.main.temp;
            obj.description = json.weather[0]['description'];
            obj.icon = json.weather[0]['icon'];  

            this.currentCity = obj;
            this.data.push(this.currentCity);            

        }));

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=87f5d13b44c8132c840c1ae0241f180c`)
        .then(response => {
            if(response) return response.json()
        })
        .then(action(json => {

                let arrLabels: Array<string> = [];
                let arrData: Array<number> = [];


                json.list.forEach((item: IForecastListItem) => {
                    arrLabels.push(item.dt_txt);              
                    arrData.push(Math.round((item.main.temp) - 273));
                })  
  
               
               this.currentCity.arrData = arrData;
               this.currentCity.arrLabels = arrLabels;
               this.isDataLoaded = true;
        }))
    }    
}


export default new WeatherData()