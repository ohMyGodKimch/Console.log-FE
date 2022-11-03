import { Box, SecondHeading, TextArea, Button, Flex } from "../../common";
import { useState } from "react";
import { CommentItem } from "../../components/comment";
import { useDispatch } from "react-redux";
import { __addComment } from "../../redux/modules/wirte/writeSlice";

const Comment = ({ write }) => {
	// Redux dispatch
	const dispatch = useDispatch();
	// 댓글 본문 값을 저장하는 state
	const [commentValue, setCommentValue] = useState("");
	// 상세페이지에서 댓글 목록 추출
	const { commentList } = write;

	if (!write) {
		return <div>로딩중</div>;
	}

	return (
		<Box variant="comment-wrap">
			<SecondHeading variant="comment-header">
				{commentList?.length}개의 댓글
			</SecondHeading>
			<Box variant="comment-input-wrap">
				<TextArea
					placeholder="댓글을 작성하세요"
					value={commentValue}
					variant="comment-input"
					onChange={e => {
						setCommentValue(e.target.value);
					}}
				/>
				<Flex width="100%" height="100%" jc="flex-end" ai="center">
					<Button
						variant="comment"
						onClick={() => {
							dispatch(
								__addComment({
									boardId: write.boardId,
									content: { content: commentValue },
								}),
							);
							setCommentValue("");
						}}
					>
						댓글 작성
					</Button>
				</Flex>
			</Box>
			<Box variant="comment-list-wraper">
				<Box variant="comment-list">
					{/* 댓글 리스트 반복문 */}
					{commentList?.map(item => {
						return <CommentItem key={item.commentId} item={item} />;
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default Comment;
