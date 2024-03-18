// store.js

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./user/slice/index";
import { rootSaga } from "./rootsaga";

// Create Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Load initial state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // Ignore write errors
  }
};

// Load initial state
const initialState = loadState();

// Create the Redux store with middleware
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Subscribe to store updates to save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
