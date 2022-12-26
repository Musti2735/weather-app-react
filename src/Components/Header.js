import react, {useContext} from "react";
import WeatherCard from "./WeatherCard";


function Header (){


    return(
        <div> 
            <h2>Header</h2>
            <WeatherCard/>
        </div>
    )
}

export default Header;