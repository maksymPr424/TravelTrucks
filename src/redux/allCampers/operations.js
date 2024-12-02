import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

axios.defaults.baseURL = API_URL;

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios(`/campers/${id}`);

      return res.data;
    } catch (e) {
      return rejectWithValue(
        e.message || "An error occurred while fetching camper by id"
      );
    }
  }
);

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (page, { getState, rejectWithValue }) => {
    const { filters } = getState();

    const params = new URLSearchParams({
      limit: 5,
      page,
    });

    const queryParams = {
      ...filters.equipmentFilters.reduce((acc, item) => {
        if (item === "Automatic") {
          acc["transmission"] = item.toLowerCase();
        } else {
          acc[item.length > 2 ? item.toLowerCase() : item] = true;
        }
        return acc;
      }, {}),
      ...filters.typeFilters.reduce((acc, item) => {
        acc["form"] =
          item === "Van"
            ? "panelTruck"
            : item === "Fully Integrated"
            ? "fullyIntegrated"
            : item.toLowerCase();
        return acc;
      }, {}),
      location: filters.location || "",
    };
    console.log(queryParams);

    const queryString = Object.entries(queryParams)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    try {
      const res = await axios(`/campers?&${params}&${queryString}`);

      return { ...res.data, page };
    } catch (e) {
      return rejectWithValue(
        e.message || "An error occurred while fetching campers"
      );
    }
  }
);
