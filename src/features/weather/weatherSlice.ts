import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherInfo } from '../../utils/types';

interface WeatherState {
    weather: Partial<WeatherInfo>;
    message: string;
}

const initialState: WeatherState = {
    weather: {},
    message: 'Enter city name',
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action: PayloadAction<Partial<WeatherInfo>>) => {
            state.weather = action.payload;
            state.message = '';
        },
        setError: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
            state.weather = {};
        },
    },
});

export const { setWeather, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
