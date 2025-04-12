
import {WeatherInfo} from "../utils/types";

interface Props {
    message: string,
    weather: Partial<WeatherInfo>;
}

const Weather = ({weather, message}: Props) => {
    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {(new Date(weather.sunset! * 1000)).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    );
};

export default Weather;