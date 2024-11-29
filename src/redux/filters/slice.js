import { createSlice } from "@reduxjs/toolkit";

const initValues = {
  equipmentFilters: [],
  typeFilters: [],
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initValues,
  reducers: {
    setEquipmentFilters: (state, action) => {
      state.equipmentFilters = action.payload;
    },
    setTypeFilters: (state, action) => {
      state.typeFilters = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setEquipmentFilters, setTypeFilters, setLocation } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
