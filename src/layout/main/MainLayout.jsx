import * as styles from "./MainLayout.styles";
import { MainNav, MainButtonGroup } from "../../components/mainlist";
import { MainListPage } from "../../pages/mainlist";

const MainLayout = () => {
	return (
		<styles.MainLayout>
			<MainNav />
			<MainButtonGroup />
			<MainListPage />
		</styles.MainLayout>
	);
};

export default MainLayout;
