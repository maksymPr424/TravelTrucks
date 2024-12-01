export const selectCampers = (state) => state.campersReducer.campers;
export const selectTotalCampers = (state) => state.campersReducer.total;
export const selectCamperById = (state, id) =>
  state.campersReducer.campers.filter((camper) => camper.id === id)[0];
export const selectCurrentPage = (state) => state.campersReducer.page;
export const selectIsLoading = (state) => state.campersReducer.isLoading;
export const selectIsError = (state) => state.campersReducer.isError;
export const selectCurrentCamper = (state) =>
  state.campersReducer.currentCamper;
