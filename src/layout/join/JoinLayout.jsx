import { Outlet } from "react-router-dom";
import * as styles from "./JoinLayout.styles";

const JoinLayout = () => {
	return (
		<styles.JoinLayout>
			<Outlet></Outlet>
		</styles.JoinLayout>
	);
};

export default JoinLayout;
