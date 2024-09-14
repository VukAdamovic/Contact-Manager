import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allowSearch: false,
	searchInput: "",
};


const searchSlice = createSlice( {
	name: "search",
	initialState: initialState,
	reducers: {
		allowSearch( state ){
			state.allowSearch = true;
		},
		disallowSearch( state ){
			state.allowSearch = false;
		},
		setSearchInput( state, action ){
			state.searchInput = action.payload;
		}
	}
} );


export const { allowSearch, disallowSearch, setSearchInput } = searchSlice.actions;

export default searchSlice.reducer;





