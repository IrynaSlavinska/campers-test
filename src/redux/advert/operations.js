import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65fae50d3909a9a65b1be345.mockapi.io';

export const getAllAdvert = createAsyncThunk(
  'advert/getAllAdvert',

  async (page, thunkApi) => {
    try {
      const response = await axios.get(`/advert/?page=${page}&limit=4`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
