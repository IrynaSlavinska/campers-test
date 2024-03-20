import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65fae50d3909a9a65b1be345.mockapi.io';

export const getAllAdvert = createAsyncThunk(
  'advert/getAllAdvert',

  async (_, thunkApi) => {
    try {
      const response = await axios.get('/advert');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOneAdvert = createAsyncThunk(
  'advert/getOneAdvert',

  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/advert/:${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
