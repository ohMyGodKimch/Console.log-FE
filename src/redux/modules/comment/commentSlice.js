import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
	commets: [],
	isLoading: false,
};

// 댓글 추가
export const __addComment = createAsyncThunk(
	"comment/getComments",
	async (payload, thunkAPI) => {
		try {
			console.log("__addComment payload =>", payload);
			const board_id = payload;
			const token = localStorage.getItem("jwtToken");
			const response = await axios.post(
				`${BASE_URL}/${board_id}/comments`,
				board_id,
				{
					headers: { Authorization: `${token}` },
				},
			);
			console.log("__addComment response =>", response);
			const commentList = await axios.get(`${BASE_URL}/boards`, payload, {
				headers: { Authorization: `${token}` },
			});
			console.log("commentList =>", commentList);
			return thunkAPI.fulfillWithValue(commentList);
		} catch (error) {
			console.log("__addComment error =>", error);
			return thunkAPI.fulfillWithValue(error.data);
		}
	},
);

const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {},
	extraReducers: {
		// 댓글 추가
		[__addComment.pending]: (state, _) => {
			console.log("__addComment.pending");
			state.isLoading = true;
		},
		[__addComment.fulfilled]: (state, action) => {
			console.log("__addComment.fulfilled =>", action.payload);
			state.isLoading = false;
		},
		[__addComment.rejected]: (state, action) => {
			console.log("__addComment.rejected =>", action.payload);
			state.isLoading = false;
		},
	},
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
