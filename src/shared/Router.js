import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout";
import WritePage from "../pages/write/WritePage";
import { Mypage } from "../pages/mypage";
import { Test } from "../pages/test";
import { EditPage } from "../pages/edit";
import MainListPage from "../pages/mainlist";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />} />

					<Route path="/boards" element={<WritePage />} />
					<Route path="/main" element={<MainListPage />} />
					<Route path="/mypage/:id" element={<Mypage />} />
					<Route path="/edit/:id" element={<EditPage />} />
					{/* <Route path="/main" element={<MainItem />} /> */}

					<Route path="/test" element={<Test />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
