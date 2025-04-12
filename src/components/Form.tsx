import {FormEvent} from "react";

interface Props{
    getWeather: (city: string) => void;
}

const Form = ({getWeather}: Props) => {

    const handelGetWeather = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);

    }

    return (
        <form onSubmit={handelGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;