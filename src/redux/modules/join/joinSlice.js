import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	isLoading: false,
	nickname: null,
	statusMessage: null,
	statusCode: null,
	isLogin: null,
	isCheckedId: false,
	isCheckedNickname: false,
};

// User Nickname Exist Check
export const __isNicknameExist = createAsyncThunk(
	"join/requestSignIn",
	async (payload, thunkAPI) => {
		try {
			console.log("__isNicknameExist payload =>", payload);
			const response = await axios.post(
				`${BASE_URL}/member/check-nickname`,
				payload,
			);
			console.log("__isNicknameExist response =>", response);
			const data = {
				statusCode: response.status,
				isExist: response.data.data,
			};
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			console.log("__isNicknameExist error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// User Id Exist Check
export const __isIdExist = createAsyncThunk(
	"join/isIdExist",
	async (payload, thunkAPI) => {
		console.log("__isIdExist payload =>", payload);
		try {
			const response = await axios.post(
				`${BASE_URL}/member/check-name`,
				payload,
			);
			console.log("__isIdExist response =>", response);
			const data = {
				statusCode: response.status,
				isExist: response.data.data,
			};
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			console.log("__isIdExist error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// Sign Up POST
// export const __requestSignUp = createAsyncThunk(
// 	"join/requestSignIn",
// 	async (payload, thunkAPI) => {
// 		try {
// 			console.log("requestSignIn payload =>", payload);
// 			console.log();
// 			const response = await axios.post(`${BASE_URL}/member/login`, payload);
// 			console.log("requestSignIn response =>", response);
// 			return thunkAPI.fulfillWithValue(response.data);
// 		} catch (error) {
// 			console.log("requestSignIn error =>", error);
// 			return thunkAPI.rejectWithValue(error.response.data);
// 		}
// 	},
// );

// // Sign In POST
// export const __requestSignIn = createAsyncThunk(
// 	"join/requestSignIn",
// 	async (payload, thunkAPI) => {
// 		try {
// 			console.log("requestSignIn payload =>", payload);
// 			console.log();
// 			const response = await axios.post(`${BASE_URL}/member/login`, payload);
// 			console.log("requestSignIn response =>", response);
// 			return thunkAPI.fulfillWithValue(response.data);
// 		} catch (error) {
// 			console.log("requestSignIn error =>", error);
// 			return thunkAPI.rejectWithValue(error.response.data);
// 		}
// 	},
// );

const joinSlice = createSlice({
	name: "join",
	initialState,
	reducers: {
		resetNicknameCheck: (state, _) => {
			state.isCheckedNickname = false;
		},
		resetIdCheck: (state, _) => {
			state.isCheckedId = false;
		},
	},
	extraReducers: {
		// 닉네임 중복
		[__isNicknameExist.pending]: (state, _) => {
			console.log("__isNicknameExist.pending");
			state.isLoading = true;
		},
		[__isNicknameExist.fulfilled]: (state, action) => {
			console.log("__isNicknameExist.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedNickname = action.payload.isExist;
		},
		[__isNicknameExist.rejected]: (state, action) => {
			console.log("__isNicknameExist.rejected =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedNickname = action.payload.isExist;
		},
		// 아이디 중복
		[__isIdExist.pending]: (state, _) => {
			console.log("__isIdExist.pending");
			state.isLoading = true;
		},
		[__isIdExist.fulfilled]: (state, action) => {
			console.log("__isIdExist.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedId = action.payload.isExist;
		},
		[__isIdExist.rejected]: (state, action) => {
			console.log("__isIdExist.rejected =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.msg;
			state.isCheckedId = action.payload.isExist;
		},

		// 회원가입
		// [__requestSignUp.pending]: (state, _) => {
		// 	console.log("__requestSignUp.pending");
		// 	state.isLoading = true;
		// },
		// [__requestSignUp.fulfilled]: (state, action) => {
		// 	console.log("__requestSignUp.fulfilled =>", action.payload);
		// 	state.isLoading = false;
		// 	state.statusCode = action.payload.statusCode;
		// 	state.statusMessage = action.payload.msg;
		// 	state.user = action.payload;
		// },
		// [__requestSignUp.rejected]: (state, action) => {
		// 	console.log("__requestSignUp.rejected =>", action.payload);
		// 	state.isLoading = false;
		// 	state.statusCode = action.payload.statusCode;
		// 	state.statusMessage = action.payload.msg;
		// 	state.error = action.payload;
		// },
		// 로그인
		// [__requestSignIn.pending]: (state, _) => {
		// 	console.log("__requestSignUp.pending");
		// 	state.isLoading = true;
		// },
		// [__requestSignIn.fulfilled]: (state, action) => {
		// 	console.log("__requestSignUp.fulfilled =>", action.payload);
		// 	state.isLoading = false;
		// 	state.statusCode = action.payload.statusCode;
		// 	state.statusMessage = action.payload.msg;
		// 	state.user = action.payload;
		// },
		// [__requestSignIn.rejected]: (state, action) => {
		// 	console.log("__requestSignUp.rejected =>", action.payload);
		// 	state.isLoading = false;
		// 	state.statusCode = action.payload.statusCode;
		// 	state.statusMessage = action.payload.msg;
		// 	state.error = action.payload;
		// },
	},
});

export const { resetIdCheck, resetNicknameCheck } = joinSlice.actions;
export default joinSlice.reducer;
