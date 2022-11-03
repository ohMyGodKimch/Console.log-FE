import { BrowserRouter, Routes, Route } from "react-router-dom";
import WritePage from "../pages/write/WritePage";
import { MainLayout } from "../layout";
import { Mypage } from "../pages/mypage";
import { EditPage } from "../pages/edit";
import MainListPage from "../pages/mainlist";
import UpdatePage from "./../pages/update/UpdatePage";

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
					<Route path="/update/:id" element={<UpdatePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
