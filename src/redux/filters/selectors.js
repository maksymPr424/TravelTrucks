export const selectEquipmentFilters = (state) => state.filters.equipmentFilters;
export const selectTypeFilters = (state) => state.filters.typeFilters;
export const selectLocation = (state) => state.filters.location;
export const selectAllFilters = (state) => {
  return [
    ...state.filters.equipmentFilters,
    ...state.filters.typeFilters,
    ...state.filters.location,
  ];
};
