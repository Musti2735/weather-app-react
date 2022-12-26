import react, {useContext} from "react";
import ThemeContext from "../context/weather";

function Button (){
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <div>
            <h2>Footer</h2>
            <button onClick={()=>setTheme( theme=='light' ? 'dark' : 'light')}>Button</button></div>
    )
}

export default Button;