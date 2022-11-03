import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

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
				boardId: data.data.boardId,
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
			state.write.filter(state => state.id !== action.payload);
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
	},
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
