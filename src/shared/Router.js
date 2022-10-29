import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinLayout from "../layout/join";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/join" element={<JoinLayout />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
