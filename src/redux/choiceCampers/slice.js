import { createSlice } from "@reduxjs/toolkit";

const initValues = {
  campers: [],
  ids: [],
};

const choiceCampersSlice = createSlice({
  name: "choiceCampers",
  initialState: initValues,
  reducers: {
    toggleChoiceCamper: (state, action) => {
      const isInclude = state.ids.includes(action.payload.id);

      if (isInclude) {
        state.campers = state.campers.filter(
          ({ id }) => id !== action.payload.id
        );

        state.ids = state.ids.filter((id) => id !== action.payload.id);
      } else {
        state.campers = [...state.campers, action.payload];
        state.ids = [...state.ids, action.payload.id];
      }
    },
  },
});

export const { toggleChoiceCamper } = choiceCampersSlice.actions;
export const choiceCampersReducer = choiceCampersSlice.reducer;
