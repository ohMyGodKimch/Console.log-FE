import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout";
import { WritePage } from "../pages/write";
import { Mypage } from "../pages/mypage";
import { MainListPage } from "../pages/mainlist";
import { EditPage } from "../pages/edit/";

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
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
