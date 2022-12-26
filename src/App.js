import './App.css';
import {WeatherProvider} from './context/weather';
import Footer from './Components/Footer'
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';


function App() {

  return (
    <WeatherProvider>
      <Header/>
      <Footer/>
      <WeatherCard/>


    </WeatherProvider>
  );
}

export default App;
