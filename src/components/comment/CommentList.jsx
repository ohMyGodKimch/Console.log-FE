import {
	Box,
	SecondHeading,
	TextArea,
	Button,
	Image,
	DataList,
	DataTerm,
	DataDesc,
	Text,
	Flex,
} from "../../common";

const CommentList = () => {
	return (
		<Box variant="comment-wrap">
			<SecondHeading variant="comment-header">n개의 댓글</SecondHeading>
			<Box variant="comment-input-wrap">
				<TextArea variant="comment-input" placeHolder="댓글을 작성하세요" />
				<Flex width="100%" height="100%" jc="flex-end" ai="center">
					<Button variant="comment">댓글 작성</Button>
				</Flex>
			</Box>
			<Box variant="comment-list-wraper">
				<Box variant="comment-list">
					{/* 댓글 리스트 반복문 */}
					<Box variant="comment-item-wrap">
						<Box variant="comment-header">
							<Image />
							<Box variant="comment-info-wrap">
								<DataList variant="comment">
									<DataTerm variant="comment">작성자</DataTerm>
									<DataDesc variant="comment">닉네임</DataDesc>
								</DataList>
								<DataList variant="comment">
									<DataTerm variant="comment">작성일</DataTerm>
									<DataDesc variant="comment">2022년 10월 24일</DataDesc>
								</DataList>
							</Box>
						</Box>
						<Box variant="comment-content">
							<Text variant="comment-content">댓글입니다~~</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CommentList;
