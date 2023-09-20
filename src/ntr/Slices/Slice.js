import { createSlice } from "@reduxjs/toolkit";

const LinksSlice = createSlice({
    initialState: [],
    name: "Links",
    reducers: {
        addLink: (state, action) => {
            state = state.push(action.payload);
        }
    }
})

export default LinksSlice.reducer;
export const { addLink } = LinksSlice.actions;