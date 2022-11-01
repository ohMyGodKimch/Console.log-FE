import * as styles from "./MainListPage.styles";
import { Flex, Margin } from "../../common";
import { MainList, MainButtonGroup } from "../../components/mainlist";

function MainListPage() {
	return (
		<Flex width="100%" jc="center">
			<styles.MainListPage>
				<Margin margin="11px 0 0 0">
					<MainButtonGroup />
					<MainList />
				</Margin>
			</styles.MainListPage>
		</Flex>
	);
}

export default MainListPage;
