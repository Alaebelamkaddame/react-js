import React from "react";
import  { configureStore } from "@reduxjs/toolkit";
import StagaireReducer from "./StagaireSlice";  // Make sure you import correctly

const store = configureStore({
  reducer: {
    stagaire: StagaireReducer,  // Registering the stagaire reducer
  },
});

export default store;
