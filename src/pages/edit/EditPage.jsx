import Edit from "../../components/edit/Edit";
import * as styles from "./EditPageLayout.styles";
import { Flex } from "../../common";
import { MainNav } from "../../components/mainlist";

function EditPage() {
	return (
		<>
			<Flex width="100%" height="100vh" jc="center">
				<styles.EditPageLayout>
					<MainNav />
					<Edit />
				</styles.EditPageLayout>
			</Flex>
		</>
	);
}

export default EditPage;
