import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	isLoding: false,
	statusCode: null,
	mainList: [],
	page: 1,
	isNext: true,
};

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

// 무한스크롤로 리스트 받아오기
export const __getNextList = createAsyncThunk(
	"getNextTodo",
	async (payload, thunkAPI) => {
		try {
			const { page } = thunkAPI.getState().mainlist;
			console.log("page =>", page);
			const response = await axios.get(`${BASE_URL}/boards/infinite-scroll`, {
				params: { page: page, size: 10, sortBy: "createdAt", isAsc: false },
			});
			console.log("response =>", response);
			const {
				data: { boardSlice },
			} = response;
			return thunkAPI.fulfillWithValue(boardSlice);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);

export const mainlistSlice = createSlice({
	name: "mainlist",
	initialState,
	reducers: {},
	extraReducers: {
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
		// 무한스크롤 리스트 가져오기
		[__getNextList.pending]: (state, action) => {
			console.log("__getNextTodo pending");
			state.isLoading = true;
		},
		[__getNextList.fulfilled]: (state, action) => {
			console.log("__getNextTodo fulfilled => ", action.payload);
			state.isLoding = false;
			state.page += 1;
			state.mainList.push(...action.payload);
			if (action.payload.length <= 10) {
				state.isNext = false;
			}
		},
		[__getNextList.rejected]: (_, action) => {
			console.log("__getNextTodo rejected =>", action.payload);
		},
	},
});

export const {} = mainlistSlice.actions;
export default mainlistSlice.reducer;
