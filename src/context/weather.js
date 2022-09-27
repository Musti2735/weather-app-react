import { createContext, useContext, useState, useEffect } from 'react';
import './weather.css';


const WeatherContext = createContext();

const url = 'https://api.openweathermap.org/data/2.5/'
const key = '24f4b587a66c966e59769c3b0f9ce4fb'

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState({})
    const [dataList, setDataList] = useState([])
    const [city, setCity] = useState('')
    const [detail, setDetail] = useState(false)

    const fetchData = async () => {
        const result = `${url}forecast?q=${city}&lang=tr&appid=${key}&units=metric`
        const response = await fetch(result);
        const weatherData = await response.json()


        setData(weatherData)
        setDataList(weatherData.list)
    }

    const currentDay = dataList.filter((day) => day.dt_txt.slice(0, 10) === dataList[0].dt_txt.slice(0, 10))
    const secondDay = dataList.filter((day) => day.dt_txt.slice(0, 10) === dataList[currentDay.length].dt_txt.slice(0, 10))
    const thirdDay = dataList.filter((day) => day.dt_txt.slice(0, 10) === dataList[currentDay.length + 8].dt_txt.slice(0, 10))
    const fourthDay = dataList.filter((day) => day.dt_txt.slice(0, 10) === dataList[currentDay.length + 16].dt_txt.slice(0, 10))
    const fifthDay = dataList.filter((day) => day.dt_txt.slice(0, 10) === dataList[currentDay.length + 24].dt_txt.slice(0, 10))

    const allDays = [currentDay, secondDay, thirdDay, fourthDay, fifthDay]


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
        setCity('')
    }

    const values = {
        data, setData, city, setCity
    }

    const showDetail =(id)=>{

        setDetail(detail === false ? true : false)
    }


    return <WeatherContext.Provider value={values}> {children}

        <div className='d-flex justify-content-center mt-5'>
            <form onSubmit={handleSubmit} >
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <button type='submit'>Buton</button>
            </form>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            {data.city ? <h3>Şehir : {data.city.name}</h3> : null}
        </div>

        <div>
            {data.city && allDays.map((day, index) => {
                return (
                    <div key={index}>
                        <div >
                            <h4>Tarih : {day.map((hour) => hour.dt_txt)[0].slice(0, 10)}</h4>
                            <p>En Yüksek {Math.floor(day.map((hour) => hour.main.temp_max).sort((a, b) => b - a)[0])} °C</p>
                            <p>En Düşük {day.map((hour) => hour.main.temp_min).sort((a, b) => a - b)[0]} °C</p>
                            <button type='submit' onClick={() => showDetail()}>Detay</button>
                        </div>
                        {
                            detail &&
                            <div className='container' >
                                {day.map((hour, index) => {
                                    return (
                                        <div key={index} className='card'>
                                            <p>Saat: {hour.dt_txt.slice(10, 16)} </p>
                                            {hour.main ? <p>Derece: {Math.floor(hour.main.temp_max)} °C</p> : null}
                                            {hour.main ? <p>Hava : {hour.weather[0].description}</p> : null}
                                        </div>
                                    )
                                })}
                            </div>
                        }

                    </div>
                )
            })}
        </div>



    </WeatherContext.Provider>;

};

export default WeatherContext;


