import Router from "./shared/Router";
import GlobalStyles from "./GlobalStyles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetToken } from "./redux/modules/join/joinSlice";

function App() {
	const dispatch = useDispatch();
	// 로그인 유무에 따른 token state 관리
	useEffect(() => {
		if (!localStorage.getItem("jwtToken")) {
			dispatch(resetToken());
		}
	}, [dispatch]);

	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;
