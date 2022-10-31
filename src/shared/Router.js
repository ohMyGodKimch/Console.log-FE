import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "../pages/join";
import { JoinLayout, MainLayout } from "../layout";
import WritePage from "../pages/write/WritePage";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/join" element={<JoinLayout />}>
						<Route path="signup" element={<SignUpPage />} />
					</Route> */}
					<Route path="/" element={<MainLayout />}>
						<Route
							path="signup"
							element={
								<>
									<SignUpPage />
								</>
							}
						/>
					</Route>
					<Route path="/boards" element={<WritePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
