import * as styles from "./MainLayout.styles";
import { Flex } from "../../common";
import { MainNav } from "../../components/mainlist";
import { MainListPage } from "../../pages/mainlist";

const MainLayout = () => {
	return (
		<Flex width="100%" height="100vh" jc="center">
			<styles.MainLayout>
				<MainNav />
				<MainListPage />
			</styles.MainLayout>
		</Flex>
	);
};

export default MainLayout;
