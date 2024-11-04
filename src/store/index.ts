import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

const store = configureStore({
  reducer
});

// 최종적으로 정의된 객체들의 타입
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;