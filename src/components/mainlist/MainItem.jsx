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
	Hidden,
} from "../../common";
// import ReactMarkdown from "react-markdown";

const MainItem = ({ postData }) => {
	return (
		<>
			<Box variant="main-item">
				<Flex height="100%" width="100%" fd="column" jc="space-between">
					<Box variant="main-item-image">
						<Image variant="main-item" src="/images/flower.jpg" />
						<Box variant="main-content">
							<SecondHeading variant="item-header">
								{postData.title}
							</SecondHeading>
							<Text
								variant="main-item-content"
								dangerouslySetInnerHTML={{ __html: postData.content }}
							></Text>
						</Box>
						<Box variant="main-item-sub-info">
							<Flex width="100%" gap="10px">
								<Box>
									<Hidden>
										<DataTerm>작성일</DataTerm>
									</Hidden>
									<DataDisc>{postData.dayBefore} ·</DataDisc>
								</Box>
								<Box>
									<Text>{postData.commentCount}개의 댓글</Text>
								</Box>
							</Flex>
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
									<DataDisc variant="main-item">{postData.writer}</DataDisc>
								</Margin>
							</DataList>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default MainItem;
