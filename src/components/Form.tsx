import { FormEvent } from "react";
import { useAppDispatch } from "../hooks";
import { setWeather, setError } from "../features/weather/weatherSlice";
import { api_key, base_url } from "../utils/constants";

const Form = () => {
    const dispatch = useAppDispatch();

    const handleGetWeather = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();

        if (!city) return;

        try {
            const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await res.json();

            dispatch(setWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            }));
        } catch (err) {
            dispatch(setError('Enter correct city name'));
        }
    };

    return (
        <form onSubmit={handleGetWeather}>
            <input type="text" name="city" />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
