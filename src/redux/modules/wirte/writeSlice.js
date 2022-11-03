import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	write: [],
	isLoding: false,
	error: null,
	isLike: null,
};

export const __getWrite = createAsyncThunk("getWrite", async (id, thunkAPI) => {
	try {
		const jwtToken = localStorage.getItem("jwtToken");
		const reponse = await axios.get(`${BASE_URL}/boards/${id}`, {
			headers: {
				Authorization: jwtToken,
				"Content-Type": "application/json",
			},
		});
		return thunkAPI.fulfillWithValue(reponse.data.headers);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.data);
	}
});

export const __postWrite = createAsyncThunk(
	"postWrite",
	async (payload, thunkAPI) => {
		try {
			const jwtToken = localStorage.getItem("jwtToken");
			const { data } = await axios.post(`${BASE_URL}/boards/write`, payload, {
				headers: {
					Authorization: jwtToken,
					"Content-Type": "application/json",
				},
			});
			return thunkAPI.fulfillWithValue({
				data: data.data,
			});
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

export const __upPostWrite = createAsyncThunk(
	"upPostWrite",
	async (payload, thunkAPI) => {
		try {
			console.log(payload);
			const jwtToken = localStorage.getItem("jwtToken");
			const reponse = await axios.put(
				`${BASE_URL}/boards/write/${payload.boardId}`,
				payload,
				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);
			return thunkAPI.fulfillWithValue(reponse.data.headers);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	},
);

export const __upDeleteWrite = createAsyncThunk(
	"upDeleteWrite",
	async (payload, thunkAPI) => {
		try {
			console.log(payload);
			const jwtToken = localStorage.getItem("jwtToken");
			const reponse = await axios.delete(
				`${BASE_URL}/boards/write/${payload.boardId}`,

				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);
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

export const __addLike = createAsyncThunk(
	"addLike",
	async (payload, thunkAPI) => {
		try {
			console.log("__addLike payload =>", payload);
			const board_id = payload;
			const jwtToken = localStorage.getItem("jwtToken");
			const response = await axios.post(
				`${BASE_URL}/heart/${board_id}`,
				board_id,
				{
					headers: {
						Authorization: jwtToken,
						"Content-Type": "application/json",
					},
				},
			);
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
			console.log("__deleteLike payload =>", payload);
			const board_id = payload;
			const jwtToken = localStorage.getItem("jwtToken");
			const response = await axios.delete(`${BASE_URL}/heart/${board_id}`, {
				headers: {
					Authorization: jwtToken,
					"Content-Type": "application/json",
				},
			});
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
		[__getWrite.pending]: state => {
			state.isLoading = true;
		},
		[__getWrite.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.write = action.payload;
		},
		[__getWrite.rejected]: state => {
			state.isLoading = false;
		},
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
			state.write.push = action.payload;
		},
		[__putWrite.rejected]: state => {
			state.isLoading = false;
		},
		[__upDeleteWrite.pending]: state => {
			state.isLoading = true;
		},
		[__upDeleteWrite.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.write = action.payload;
		},
		[__upDeleteWrite.rejected]: state => {
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
			state.isLike = true;
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
			state.isLike = false;
		},
		[__cancelLike.rejected]: (state, action) => {
			console.log("__cancelLike.pending =>", action.payload);
			state.isLoading = false;
		},
	},
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
