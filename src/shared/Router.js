import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout";
import WritePage from "../pages/write/WritePage";
import { MainItem } from "../components/mainlist";
import { Mypage } from "../pages/mypage";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/boards" element={<WritePage />} />
					<Route path="/main" element={<MainItem />} />
					<Route path="/mypage" element={<Mypage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
