import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout";
import WritePage from "../pages/write/WritePage";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />} />
					<Route path="/boards" element={<WritePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
