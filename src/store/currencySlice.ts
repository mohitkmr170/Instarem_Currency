import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_CONFIG} from '../config';

const initialState = {
  currencyData: {
    isFetching: false,
    data: null,
    error: false,
  },
  currencyPair: {
    source: {
      code: 'SGD',
      name: '',
    },
    destination: {
      code: 'INR',
      name: '',
    },
  },
};

export const getCurrencyPairs = createAsyncThunk(
  'getCurrencyPairs',
  async (currencyCode: any) => {
    const res = await fetch(`${API_CONFIG.API_URL}=${currencyCode}`);
    const response = await res?.json();
    return response;
  },
);

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setSourceCurrencyCode: (state, action) => {
      state.currencyPair.source.code = action?.payload?.code;
      state.currencyPair.source.name = action?.payload?.name;
    },
    setDestinationCurrencyCode: (state, action) => {
      state.currencyPair.destination.code = action?.payload?.code;
      state.currencyPair.destination.name = action?.payload?.name;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrencyPairs.pending, (state, action) => {
      state.currencyData.isFetching = true;
    });
    builder.addCase(getCurrencyPairs.fulfilled, (state, action) => {
      state.currencyData.isFetching = false;
      state.currencyData.data = action.payload;
    });
    builder.addCase(getCurrencyPairs.rejected, (state, action) => {
      state.currencyData.isFetching = false;
      state.currencyData.error = true;
    });
  },
});

export const {setSourceCurrencyCode, setDestinationCurrencyCode} =
  currencySlice?.actions;

export default currencySlice.reducer;
