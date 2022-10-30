import {
	Box,
	SecondHeading,
	Text,
	Flex,
	Image,
	Margin,
	DataList,
	DataDisc,
	DataTerm,
} from "../../common";

const MainItem = () => {
	return (
		<Box variant="main-item">
			<Flex height="100%" width="100%" fd="column" jc="space-between">
				<Box variant="main-item-image">
					<Image variant="main-item" src="/images/flower.jpg" />
					<Box variant="main-content">
						<SecondHeading variant="item-header">vpc 기초</SecondHeading>
						<Text variant="main-item-content">
							웹 또는 애플리케이션을 개발할 때
						</Text>
					</Box>
				</Box>

				<Box variant="main-item-info">
					<Flex height="100%" ai="center">
						<Image
							alt="profile"
							src="/images/flower.jpg"
							variant="main-item-profile"
						/>
						<DataList variant="main-item">
							<Margin display="inline-block">
								<DataTerm variant="main-item">by</DataTerm>
							</Margin>
							<Margin display="inline-block" margin="0 0 0 5px">
								<DataDisc variant="main-item">지영</DataDisc>
							</Margin>
						</DataList>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default MainItem;
