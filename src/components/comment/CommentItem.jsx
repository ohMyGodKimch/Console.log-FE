import {
	Box,
	Image,
	DataList,
	DataTerm,
	DataDesc,
	Text,
	Flex,
	Hidden,
	Button,
} from "../../common";

const CommentItem = ({ item }) => {
	return (
		<Box variant="comment-item-wrap">
			<Box variant="comment-header">
				<Flex width="100%" height="100%" ai="center" gap="10px">
					<Image
						src="/images/profile.gif"
						alt="기본 프로필"
						variant="profile"
					/>
					<Box variant="comment-info-wrap">
						<Flex width="100%" fd="column" jc="center" ai="flex-start">
							<DataList variant="comment">
								<Hidden>
									<DataTerm variant="comment">작성자</DataTerm>
								</Hidden>
								<DataDesc variant="comment-nickname">{item.nickname}</DataDesc>
							</DataList>
							<DataList variant="comment">
								<Hidden>
									<DataTerm variant="comment">작성일</DataTerm>
								</Hidden>
								<DataDesc variant="comment-date">{item.dayBefore}</DataDesc>
							</DataList>
						</Flex>
						<Box variant="comment-edit-wrap">
							<Button variant="comment-edit">수정</Button>
							<Button variant="comment-edit">삭제</Button>
						</Box>
					</Box>
				</Flex>
			</Box>
			<Box variant="comment-content">
				<Text variant="comment-content">{item.comment}</Text>
			</Box>
		</Box>
	);
};

export default CommentItem;
