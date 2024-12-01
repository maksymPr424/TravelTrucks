import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const initValues = {
  campers: [],
  total: 0,
  page: 1,
  isLoading: false,
  isError: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: initValues,
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        const currentPage = action.payload.page;

        if (currentPage === 1) {
          state.campers = action.payload.items;
        } else {
          state.campers = [...state.campers, ...action.payload.items];
        }

        state.page = currentPage + 1;
        state.total = action.payload.total;
        state.isLoading = false;
      })
      .addCase(getCampers.rejected, (state) => {
        state.campers = [];
        state.total = 0;
        state.page = 1;
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const campersReducer = campersSlice.reducer;
