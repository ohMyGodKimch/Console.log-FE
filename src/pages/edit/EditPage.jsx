import Edit from "../../components/edit/Edit";
import * as styles from "./EditPageLayout.styles";
import { Flex, Box } from "../../common";
import { MainNav } from "../../components/mainlist";

function EditPage() {
	return (
		<>
			<styles.EditPageLayout>
				<Flex width="100%" height="100vh" jc="center">
					<Box variant="edit-wrap">
						<MainNav />
						<Edit />
					</Box>
				</Flex>
			</styles.EditPageLayout>
		</>
	);
}

export default EditPage;
