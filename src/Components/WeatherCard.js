import react, { useContext, useEffect } from "react";
import WeatherContext from "../context/weather";

function WeatherCard() {
    const { city, data, setData, setCity } = useContext(WeatherContext)




    return (<>
        <div>
    
        </div>
    </>
    )
}

export default WeatherCard;