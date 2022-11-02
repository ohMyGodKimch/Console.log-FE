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
			const reponse = await axios.post(`${BASE_URL}/boards/write`, payload, {
				headers: {
					Authorization: jwtToken,
					"Content-Type": "application/json",
				},
			});

			return thunkAPI.fulfillWithValue(reponse.data.headers);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

export const __upPostWrite = createAsyncThunk(
	"upPostWrite",
	async (payload, thunkAPI) => {
		try {
			const id = payload;
			const jwtToken = localStorage.getItem("jwtToken");
			const reponse = await axios.put(
				`${BASE_URL}/boards/write/${payload.id}`,
				payload,
				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);
			console.log(id);
			console.log(reponse);
			return thunkAPI.fulfillWithValue(reponse.data.headers);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

export const __deleteWrite = createAsyncThunk(
	"deleteWrite",
	async (boardId, thunkAPI) => {
		try {
			const jwtToken = localStorage.getItem("jwtToken");
			const reponse = await axios.delete(`${BASE_URL}/boards/${boardId}`, {
				headers: {
					Authorization: jwtToken,
					"Content-Type": "application/json",
				},
			});
			return thunkAPI.fulfillWithValue(reponse.data.headers);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

export const __putWrite = createAsyncThunk(
	"putWrite",
	async (payload, thunkAPI) => {
		try {
			console.log(thunkAPI);
			const jwtToken = localStorage.getItem("jwtToken");
			const response = await axios.put(
				`${BASE_URL}/boards/${payload.id}`,
				payload,

				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);

			return thunkAPI.fulfillWithValue(response.data.headers);
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
		[__upPostWrite.pending]: state => {
			state.isLoading = true;
		},
		[__upPostWrite.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.write = action.payload;
		},
		[__upPostWrite.rejected]: state => {
			state.isLoading = false;
		},
		[__deleteWrite.pending]: state => {
			state.isLoading = true;
		},
		[__deleteWrite.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.write = action.payload;
		},
		[__deleteWrite.rejected]: state => {
			state.isLoading = false;
		},
		[__putWrite.pending]: state => {
			state.isLoading = true;
		},
		[__putWrite.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.write = action.payload;
		},
		[__putWrite.rejected]: state => {
			state.isLoading = false;
		},
	},
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
