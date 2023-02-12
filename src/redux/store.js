import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/carSlice";

const rootReduser = combineReducers({
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReduser
});

export {
    setupStore
}