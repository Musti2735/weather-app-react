import './App.css';
import {WeatherProvider} from './context/weather';
import Footer from './Components/Footer'
import Header from './Components/Header';


function App() {

  return (
    <WeatherProvider>
      <Header/>


    </WeatherProvider>
  );
}

export default App;
