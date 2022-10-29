import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	write: {
		data: [],
		isLoding: false,
		error: null,
	},
};

export const __postWrite = createAsyncThunk(
	"postWrite",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.post(`${BASE_URL}/boards`, payload);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const writeSlice = createSlice({
	name: "write",
	initialState,
	reducers: {},
	extraReducers: {
		[__postWrite.pending]: state => {
			state.isLoading = true;
		},
		[__postWrite.fulfilled]: (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
			state.write.push(action.payload);
		},
		[__postWrite.rejected]: (state, action) => {
			state.isLoading = false;
		},
	},
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
