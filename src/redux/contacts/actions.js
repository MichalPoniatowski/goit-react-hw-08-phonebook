import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://64d9fc3ce947d30a260a982f.mockapi.io';

axios.defaults.baseURL = 'http://localhost:3000/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/contacts', data);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);
