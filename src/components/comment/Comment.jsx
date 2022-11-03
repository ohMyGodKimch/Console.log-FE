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
	Hidden,
} from "../../common";

const Comment = () => {
	return (
		<Box variant="comment-wrap">
			<SecondHeading variant="comment-header">n개의 댓글</SecondHeading>
			<Box variant="comment-input-wrap">
				<TextArea placeholder="댓글을 작성하세요" variant="comment-input" />
				<Flex width="100%" height="100%" jc="flex-end" ai="center">
					<Button variant="comment">댓글 작성</Button>
				</Flex>
			</Box>
			<Box variant="comment-list-wraper">
				<Box variant="comment-list">
					{/* 댓글 리스트 반복문 */}
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
											<DataDesc variant="comment-nickname">토마토</DataDesc>
										</DataList>
										<DataList variant="comment">
											<Hidden>
												<DataTerm variant="comment">작성일</DataTerm>
											</Hidden>
											<DataDesc variant="comment-date">
												2022년 10월 24일
											</DataDesc>
										</DataList>
									</Flex>
								</Box>
							</Flex>
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

export default Comment;
