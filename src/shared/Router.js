import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "../pages/join";
import { JoinLayout, MainLayout } from "../layout";
import WritePage from "../pages/write/WritePage";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/join" element={<JoinLayout />}>
						<Route path="signup" element={<SignUpPage />} />
						<Route path="signin" element={<SignInPage />} />
					</Route>
					<Route path="/main" element={<MainLayout />} />
					<Route path="/boadrs" element={<WritePage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
