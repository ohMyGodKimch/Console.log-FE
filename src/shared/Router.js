import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "../pages/join";
import JoinLayout from "../layout/join";
import { Write } from "../components";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/join" element={<JoinLayout />}>
						<Route path="signup" element={<SignInPage />} />
						<Route path="signin" element={<SignInPage />} />
					</Route>
					<Route path="/boadrs" element={<Write />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
