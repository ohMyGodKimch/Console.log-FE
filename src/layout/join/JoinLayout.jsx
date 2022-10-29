import * as styles from "./JoinLayout.styles";
import { Outlet } from "react-router-dom";

const JoinLayout = () => {
	return (
		<styles.JoinLayout>
			레이아웃임!
			<Outlet></Outlet>
		</styles.JoinLayout>
	);
};

export default JoinLayout;
