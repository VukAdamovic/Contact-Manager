import {configureStore} from "@reduxjs/toolkit";
import sideBarSliceReducer from "./sideBarSlice";
import searchSliceReducer from "./searchSlice.js";

const store = configureStore({
	reducer: { sideBarSlice: sideBarSliceReducer, searchSlice: searchSliceReducer }
});

export default store;