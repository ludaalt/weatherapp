//const API_KEY = process.env.REACT_APP_API_KEY;

const getWeather = async (city) => {

   const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87f5d13b44c8132c840c1ae0241f180c`; 
   
   const res = await fetch(api);
   const body = await res.json();

   return body;

    //return fetch(api).then((result => result.json())).then(data => data)
    //.then(data => console.log(`from request.js: ${data}`))
}


export default getWeather;