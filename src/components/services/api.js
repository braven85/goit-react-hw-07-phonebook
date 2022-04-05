import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://624c663ed71863d7a809c7a0.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const { data } = await axios.get(`${apiURL}/contacts`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const { data } = await axios.post(`${apiURL}/contacts`, contact);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`${apiURL}/contacts/${id}`);
    try {
      const { data } = await axios.get(`${apiURL}/contacts`);
      return data;
    } catch (error) {
      return error?.response;
    }
  }
);
