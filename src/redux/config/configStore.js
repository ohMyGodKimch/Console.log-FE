import { configureStore } from "@reduxjs/toolkit";
import join from "../modules/join/joinSlice";
import write from "../modules/wirte/writeSlice";
import mainlist from "../modules/mainlist/mainlistSlice";

const store = configureStore({
	reducer: {
		join,
		write,
		mainlist,
	},
});

export default store;
