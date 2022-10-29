import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinLayout from "../layout/join";
import { Write } from "../components";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/join" element={<JoinLayout />}></Route>
					<Route path="/boadrs" element={<Write />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
