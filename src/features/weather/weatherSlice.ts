import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {WeatherInfo} from '../../utils/types';
import {api_key, base_url} from "../../utils/constants.ts";

interface WeatherState {
    weather: Partial<WeatherInfo>;
    message: string;
}

const initialState: WeatherState = {
    weather: {},
    message: 'Enter city name',
};

export const getWeather = createAsyncThunk<
    Partial<WeatherInfo>,
    string,
    { rejectValue: string }
>(
    'weather/getWeather',
    async (city, { rejectWithValue }) => {
        try {
            const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await res.json();

            if (!res.ok || !data.name) {
                return rejectWithValue('Enter correct city name');
            }

            return {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            };
        } catch {
            return rejectWithValue('Error fetching weather');
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.fulfilled, (state, action) => {
                state.weather = action.payload;
                state.message = '';
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.message = action.payload || 'Error';
                state.weather = {};
            });
    },
});

export default weatherSlice.reducer;
