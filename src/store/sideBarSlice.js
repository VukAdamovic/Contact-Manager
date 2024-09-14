import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showSideBar: false
};

const sideBarSlice = createSlice( {
	name: "sideBar",
	initialState: initialState,
	reducers: {
		toggleSidebar( state ){
			state.showSideBar = !state.showSideBar;
		},
		hideSidebar( state ){
			state.showSideBar = false;
		}
	}
} );

export const { toggleSidebar, hideSidebar } = sideBarSlice.actions;

export default sideBarSlice.reducer;