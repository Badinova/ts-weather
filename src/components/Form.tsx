import {FormEvent} from "react";
import {useAppDispatch} from "../hooks";
import {getWeather} from "../features/weather/weatherSlice.ts";

const Form = () => {
    const dispatch = useAppDispatch();

    const handleGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        if (city) {
            dispatch(getWeather(city));
        }
    };

    return (
        <form onSubmit={handleGetWeather}>
            <input type="text" name="city"/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
