import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

export const __getMypage = createAsyncThunk(
	"getMypage",
	async (boardId, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}/boards/1`);
			console.log(response);
			console.log(3);
			// console.log(payload);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

const initialState = {
	mypage: [],
	isLoding: false,
	error: null,
};

export const mypageSlice = createSlice({
	name: "mypage",
	initialState,
	reducers: {},
	extraReducers: {
		[__getMypage.pending]: state => {
			state.isLoading = true;
		},
		[__getMypage.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.mypage = action.boardId;
		},
		[__getMypage.rejected]: state => {
			state.isLoading = false;
		},
	},
});

export const {} = mypageSlice.actions;
export default mypageSlice.reducer;
