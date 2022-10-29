import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

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

export const __isNicknameExist = createAsyncThunk(
	"join/isNicknameExist",
	async (payload, thunkAPI) => {
		console.log("__isIdExist payload =>", payload);
		try {
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
export const __requestSignUp = createAsyncThunk(
	"join/requestSignUp",
	async (payload, thunkAPI) => {
		try {
			console.log("__requestSignUp payload =>", payload);
			const response = await axios.post(`${BASE_URL}/member/signup`, payload);
			console.log("__requestSignUp response =>", response);
			const data = {
				statusCode: response.status,
				successMsg: response.data.data,
			};
			console.log("__requestSignUp data =>", data);
			return thunkAPI.fulfillWithValue(data);
		} catch (error) {
			console.log("__requestSignUp error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

// Sign In POST
export const __requestSignIn = createAsyncThunk(
	"join/requestSignIn",
	async (payload, thunkAPI) => {
		try {
			console.log("__requestSignUp payload =>", payload);
			const response = await axios.post(`${BASE_URL}/member/login`, payload);
			console.log("__requestSignIn response =>", response);
			const {
				status,
				data: { data },
				headers: { authorization },
			} = response;
			const { sub } = jwt_decode(authorization);
			return thunkAPI.fulfillWithValue({
				statusCode: status,
				statusMessage: data,
				nickname: sub,
				token: authorization,
			});
		} catch (error) {
			console.log("__requestSignIn error =>", error);
			return thunkAPI.rejectWithValue(error.response.data);
		}
	},
);

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
			state.statusCode = action.payload.fulfilledData.statusCode;
			state.statusMessage = action.payload.fulfilledData.msg;
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
		[__requestSignUp.pending]: (state, _) => {
			console.log("__requestSignUp.pending");
			state.isLoading = true;
		},
		[__requestSignUp.fulfilled]: (state, action) => {
			console.log("__requestSignUp.fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.isCheckedId = action.payload.isExist;
		},
		[__requestSignUp.rejected]: (state, action) => {
			console.log("__requestSignUp.rejected =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.isCheckedId = action.payload.isExist;
		},
		// 로그인
		[__requestSignIn.pending]: (state, _) => {
			console.log("__requestSignIn pending");
			state.isLoading = true;
		},
		[__requestSignIn.fulfilled]: (state, action) => {
			console.log("__requestSignIn fulfilled =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
			state.statusMessage = action.payload.successMsg;
			localStorage.setItem("jwtToken", action.payload.token);
			localStorage.setItem("nickname", action.payload.token);
		},
		[__requestSignIn.rejected]: (state, action) => {
			console.log("__requestSignIn rejected =>", action.payload);
			state.isLoading = false;
			state.statusCode = action.payload.statusCode;
		},
	},
});

export const { resetIdCheck, resetNicknameCheck } = joinSlice.actions;
export default joinSlice.reducer;
