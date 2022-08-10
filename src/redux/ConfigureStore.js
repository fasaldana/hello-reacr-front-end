import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./Greeting";

const store = configureStore({
    reducer: {
        greeting: greetingReducer,
    },
});

export default store;