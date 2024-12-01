import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filters/slice";
import { campersReducer } from "./allCampers/slice";
import { choiceCampersReducer } from "./choiceCampers/slice";

const filterPersistConfig = {
  key: "filters",
  storage,
  whitelist: ["equipmentFilters", "typeFilters", "location"],
};

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["campers", "total"],
};

const choiceCampersPersistConfig = {
  key: "choiceCampers",
  storage,
  whitelist: ["campers", "ids"],
};

export const store = configureStore({
  reducer: {
    filters: persistReducer(filterPersistConfig, filtersReducer),
    campersReducer: persistReducer(campersPersistConfig, campersReducer),
    choiceCampersReducer: persistReducer(
      choiceCampersPersistConfig,
      choiceCampersReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
