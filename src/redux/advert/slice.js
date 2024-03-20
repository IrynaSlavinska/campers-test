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
  name: 'advert',
  initialState: {
    advert: [],
    oneAdvert: {},
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getAllAdvert.pending, handlePending)
      .addCase(getAllAdvert.fulfilled, (state, action) => {
        state.advert = action.payload;
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
