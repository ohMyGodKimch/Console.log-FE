import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	mainList: null,
	isLoding: false,
	statusCode: null,
};

export const __getMainList = createAsyncThunk(
	"getMainList",
	async (_, thunkAPI) => {
		try {
			const {
				status,
				data: { data },
			} = await axios.get(`${BASE_URL}/boards`);

			console.log("response  status =>", status, "data =>", data);

			return thunkAPI.fulfillWithValue({ status, mainList: data });
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// 포스팅
export const __addBoardItem = createAsyncThunk(
	"addBoardItem",
	async (payload, thunkAPI) => {
		try {
			console.log("__addBoardItem payload => ", payload);
			const token = localStorage.getItem("jwtToken");
			console.log("__addBoardItem token =>", token);
			const response = await axios.post(`${BASE_URL}/boards`, payload, {
				headers: { Authorization: `${token}` },
			});
			console.log("__addBoardItem response =>", response);
			return thunkAPI.fulfillWithValue(payload);
		} catch (error) {
			console.log("__addBoardItem error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

export const mainlistSlice = createSlice({
	name: "mainlist",
	initialState,
	reducers: {},
	extraReducers: {
		// 메인페이지 리스트 불러오기
		[__getMainList.pending]: (_, state) => {
			console.log("__getMainList.pending");
			state.isLoading = true;
		},
		[__getMainList.fulfilled]: (state, action) => {
			console.log("__getMainList fulfilled  payload=>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.status;
			state.mainList = action.payload.mainList;
		},
		[__getMainList.rejected]: (state, action) => {
			console.log("__getMainList rejected  payload => ", action.payload);
			state.isLoading = false;
		},
		// 포스팅
		[__addBoardItem.pending]: (_, state) => {
			console.log("__addBoardItem.pending");
			state.isLoading = true;
		},
		[__addBoardItem.fulfilled]: (state, action) => {
			console.log("__addBoardItem fulfilled  payload=>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.status;
			// state.mainList.push(action.payload);
		},
		[__addBoardItem.rejected]: (state, action) => {
			console.log("__addBoardItem rejected  payload => ", action.payload);
			state.isLoading = false;
		},
	},
});

export const {} = mainlistSlice.actions;
export default mainlistSlice.reducer;
