import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
    },
});

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;