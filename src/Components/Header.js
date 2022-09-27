import react, {useContext} from "react";
import WeatherCard from "./WeatherCard";


function Header (){


    return(
        <div> 
            <h2>Hava Durumu</h2>
            <WeatherCard/>
        </div>
    )
}

export default Header;