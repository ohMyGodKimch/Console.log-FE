import { Box, Margin, Flex } from "../../common";
import { MainItem } from "../../components/mainlist";

const MainList = () => {
	return (
		<Margin margin="30px 0 0 0">
			<Box variant="main-list-box">
				<Flex gap="30px" jc="center">
					<MainItem />
				</Flex>
			</Box>
		</Margin>
	);
};

export default MainList;
