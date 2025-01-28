import React from "react";
import { createSlice, current } from "@reduxjs/toolkit";

const StagaireSlice = createSlice({
    name: 'stagaire',
    initialState: [],
    reducers: {
        addStagaire: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addStagaire} = StagaireSlice.actions
export default StagaireSlice.reducer;