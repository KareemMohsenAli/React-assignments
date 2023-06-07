import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialAuthState = {
  isAuthenticated: false,
};
const AuthSlicer = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, hide: true },
  reducers: {
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.hide = !state.hide;
    },
  },
});

// const counterReducer = (state = { counter: 0, hide: true }, action) => {
//   if (action.type === "increment") {
//     if (state.hide) {
//       return {
//         counter: state.counter + 1,
//         hide: state.hide,
//       };
//     } else {
//       return {
//         counter: state.counter,
//         hide: state.hide,
//       };
//     }
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       hide: state.hide,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       hide: !state.hide,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       hide: state.hide,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// const store = createStore(counterSlice.reducer);

// const store = configureStore(
//   {
//     reducer:counterSlice.reducer
//   }
//   );

const store = configureStore({
  reducer: { counter: counterSlice.reducer, Auth: AuthSlicer.reducer },
});

export const counterActions = counterSlice.actions;
export const AuthActions = AuthSlicer.actions;

export default store;
