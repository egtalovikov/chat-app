import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage(state, action) {
            state.push(action.payload);
        },
        removeMessage(state, action) {
            return state.filter((message) => message.id !== action.payload);
        },
    },
});

export const { addMessage, removeMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;