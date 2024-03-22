import { createSlice } from '@reduxjs/toolkit';
import { getAllAdvert, getOneAdvert } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    oneAdvert: {},
    isLoading: false,
    error: null,
    totalResults: 13,
  },

  extraReducers: builder => {
    builder
      .addCase(getAllAdvert.pending, handlePending)
      .addCase(getAllAdvert.fulfilled, (state, action) => {
        // state.adverts = [...state.adverts, ...action.payload];
        state.adverts = [...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllAdvert.rejected, handleError)

      .addCase(getOneAdvert.pending, handlePending)
      .addCase(getOneAdvert.fulfilled, (state, action) => {
        state.oneAdvert = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOneAdvert.rejected, handleError);
  },
});

export const advertReducer = advertSlice.reducer;
