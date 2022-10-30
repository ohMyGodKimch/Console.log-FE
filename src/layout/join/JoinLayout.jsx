import * as styles from "./JoinLayout.styles";
import { Outlet } from "react-router-dom";

const JoinLayout = () => {
	return (
		<styles.JoinLayout>
			<Outlet></Outlet>
		</styles.JoinLayout>
	);
};

export default JoinLayout;
