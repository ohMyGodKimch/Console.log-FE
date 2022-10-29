import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getMainList = createAsyncThunk(
	"getMainList",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.get("http://localhost:8080/boadrs");
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

const initialState = {
	list: [],
	isLoding: false,
	error: null,
};

export const mainlistSlice = createSlice({
	name: "mainlist",
	initialState,
	reducers: {},
	extraReducers: {
		[__getMainList.pending]: state => {
			state.isLoading = true;
		},
		[__getMainList.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.mainlist = action.payload;
		},
		[__getMainList.rejected]: state => {
			state.isLoading = false;
		},
	},
});

export const {} = mainlistSlice.actions;
export default mainlistSlice.reducer;
