import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";
import write from "../modules/wirte/writeSlice";

const store = configureStore({
	reducer: {
		join,
		write,
	},
});

export default store;
