
import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {api_key, base_url} from "../utils/constants.ts";
import {useState} from "react";
import {WeatherInfo} from "../utils/types";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState<Partial<WeatherInfo>>({});
    const [message, setMessage] = useState('Enter city name');

    const getWeather = async (city: string) => {
        try {
            const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await res.json();
            setWeatherInfo({
                            city: data.name,
                            country: data.sys.country,
                            temp: data.main.temp,
                            pressure: data.main.pressure,
                            sunset: data.sys.sunset,
                        });
                        setMessage('');
        }catch (e){
            console.log(e)
            setMessage('Enter correct city name');
        }
    }
    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );
};

export default Data;