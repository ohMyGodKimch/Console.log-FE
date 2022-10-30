import { Box, Button, Flex, Text } from "../../common";

const MainButtonGroup = () => {
	return (
		<Box>
			<Button variant="main-new">
				<Flex ai="center" jc="center" gap="8px">
					<svg fontSize="1.5rem" height="1em" width="1em">
						<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
					</svg>
					<Text variant="main-new">최신</Text>
				</Flex>
			</Button>
		</Box>
	);
};

export default MainButtonGroup;
