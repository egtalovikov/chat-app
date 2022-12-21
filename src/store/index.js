import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { messagesReducer } from "./messagesSlice";
import { usersReducer } from './usersSlice';
import {
    createStateSyncMiddleware,
    initMessageListener,
} from "redux-state-sync";
import { persistReducer } from "redux-persist";
import { excludedActions, persistConfig } from "../consts";

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
        createStateSyncMiddleware({
            blacklist: excludedActions,
        })
    ),
});

initMessageListener(store);

export default store;