import { createSlice } from '@reduxjs/toolkit';
import { getAllAdvert, addBooking } from './operations';

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
    favorites: [],
    oneAdvert: {},
    isLoading: false,
    error: null,
    totalResults: 13,
    booking: {},
  },

  reducers: {
    clearAdverts(state, action) {
      state.adverts = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllAdvert.pending, handlePending)
      .addCase(getAllAdvert.fulfilled, (state, action) => {
        state.adverts = [...state.adverts, ...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllAdvert.rejected, handleError)

      .addCase(addBooking.pending, handlePending)
      .addCase(addBooking.fulfilled, (state, action) => {
        state.booking = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBooking.rejected, handlePending);
  },
});

export const { clearAdverts } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
