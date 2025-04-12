import {useAppSelector} from "../hooks.ts";

const Weather = () => {
    const {weather, message} = useAppSelector((state) => state.weather);
    return (
        <div className={'infoWeath'}>
            {!message && weather.city &&(
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {(new Date(weather.sunset! * 1000)).toLocaleTimeString()}</p>
                </>
            )}
            {message}
        </div>
    );
};

export default Weather;