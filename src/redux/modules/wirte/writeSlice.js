import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_SERVER;
//localhost:8080/
// http://13.125.106.163:8080/

// axios.defaults.headers.post["Authorization"] = "X-AUTH_TOKEN";

const initialState = {
	write: [],
	isLoding: false,
	error: null,
};

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

export const __addLike = createAsyncThunk(
	"addLike",
	async (payload, thunkAPI) => {
		try {
			const board_id = payload;
			const response = await axios.post(`${BASE_URL}/heart/${board_id}`);
			console.log("response =>", response);
			return thunkAPI.fulfillWithValue(board_id);
		} catch (error) {
			console.log("error => ", error);
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

export const __cancelLike = createAsyncThunk(
	"cancelLike",
	async (payload, thunkAPI) => {
		try {
			const board_id = payload;
			const response = await axios.delete(`${BASE_URL}/write/${board_id}`);
			console.log("response =>", response);
			return thunkAPI.fulfillWithValue(board_id);
		} catch (error) {
			console.log("error => ", error);
			return thunkAPI.rejectWithValue(error.data);
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
			state.write = action.payload;
		},
		[__postWrite.rejected]: state => {
			state.isLoading = false;
		},
		// 좋아요
		[__addLike.pending]: state => {
			console.log("__addLike.pending");
			state.isLoading = true;
		},
		[__addLike.fulfilled]: (state, action) => {
			console.log("__addLike.fulfilled =>", action.payload);
			state.isLoading = false;
			// 리스트에서 board_id에 해당하는 게시글의 좋아요를 1 해주기
		},
		[__addLike.rejected]: (state, action) => {
			console.log("__addLike.rejected =>", action.payload);
			state.isLoading = false;
		},
		// 좋아요 취소
		[__cancelLike.pending]: state => {
			console.log("__cancelLike.pending");
			state.isLoading = true;
		},
		[__cancelLike.fulfilled]: (state, action) => {
			console.log("__cancelLike.fulfilled =>", action.payload);
			state.isLoading = false;
			// 리스트에서 board_id에 해당하는 게시글의 좋아요를 -1 해주기
		},
		[__cancelLike.rejected]: (state, action) => {
			console.log("__cancelLike.pending =>", action.payload);
			state.isLoading = false;
		},
	},
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
