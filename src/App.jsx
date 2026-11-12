
import Weather from './component/Weather';

function App() {
 const weatherForecasts = [
  {
    day: 'Mon',
    img: '/day.png',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: '/night.png',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: '/stormy.png',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: '/cloudy-day.png',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: '/cloudy-night.png',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];
  return (
   <div>
    <h1>Weather Forecast</h1>
    <section>
     {weatherForecasts.map((forecast, index) => (
       <Weather
         key={index}
         day={forecast.day}
         time={forecast.time}
         conditions={forecast.conditions}
         img={forecast.img}
         imgAlt={forecast.imgAlt}
       />
     ))}
    </section>
   </div>
  );
}
export default App;
