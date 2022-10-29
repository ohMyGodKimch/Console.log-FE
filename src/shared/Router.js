import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "../pages/join";
import JoinLayout from "../layout/join";
import WritePage from "../pages/write/WritePage";
import { MainlistPage } from "../pages/mainlist";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/join" element={<JoinLayout />}>
						<Route path="signup" element={<SignUpPage />} />
						<Route path="signin" element={<SignInPage />} />
					</Route>
					<Route path="/main" element={<MainlistPage />}></Route>
					<Route path="/boadrs" element={<WritePage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
