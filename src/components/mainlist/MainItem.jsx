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
import { __getMainList } from "../../redux/modules/mainlist/mainlistSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const MainItem = () => {
	const list = useSelector(state => state.mainlist.mainlist);
	console.log(list);
	console.log(1);
	const dispatch = useDispatch();
	console.log(list);
	useEffect(() => {
		dispatch(__getMainList());
	}, [dispatch]);

	return (
		<>
			{/* <Box variant="main-item">
				<Flex height="100%" width="100%" fd="column" jc="space-between">
					<Box variant="main-item-image">
						<Image variant="main-item" src="/images/flower.jpg" />
						<Box variant="main-content">
							<SecondHeading variant="item-header">제목</SecondHeading>
							<Text variant="main-item-content">내용</Text>
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
			</Box> */}
			{list && list.length > 0
				? list.map((boards, id) => {
						return (
							<Box key={id} variant="main-item">
								<Flex height="100%" width="100%" fd="column" jc="space-between">
									<Box variant="main-item-image">
										<Image variant="main-item" src="/images/flower.jpg" />
										<Box variant="main-content">
											<SecondHeading variant="item-header">
												{boards.title}
											</SecondHeading>
											<Text
												variant="main-item-content"
												dangerouslySetInnerHTML={{ __html: boards.content }}
											></Text>
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
				  })
				: ""}
		</>
	);
};

export default MainItem;
