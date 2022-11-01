import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_SERVER;
//localhost:8080/
// http://13.125.106.163:8080/

// axios.defaults.headers.post["Authorization"] = "X-AUTH_TOKEN";

export const __postWrite = createAsyncThunk(
	"postWrite",
	async (payload, thunkAPI) => {
		try {
			const jwtToken = localStorage.getItem("jwtToken");
			const reponse = await axios.post(`${BASE_URL}/boards`, payload, {
				headers: {
					Authorization: jwtToken,
					"Content-Type": "application/json",
				},
			});
			// localStorage.setItem.headers("Authorization", "X-AUTH_TOKEN");

			return thunkAPI.fulfillWithValue(reponse.data.headers);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

const initialState = {
	write: [],
	isLoding: false,
	error: null,
};

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
			state.write = action.payload;
		},
		[__postWrite.rejected]: state => {
			state.isLoading = false;
		},
	},
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
