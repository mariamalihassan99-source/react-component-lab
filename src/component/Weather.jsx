
import './Weather.css';

function Weather({ day, time, conditions, img, imgAlt }) {    
    return (
       <div className="weather">
         <h2> today : {day}</h2>
         <img src={img} alt={imgAlt} />
         <p><span>conditions: </span>{conditions}</p>
         <p><span>time: </span>{time}</p>
       </div>
   
    );
}
export default Weather;