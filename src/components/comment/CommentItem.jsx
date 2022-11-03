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
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	__deleteComment,
	__editComment,
} from "../../redux/modules/wirte/writeSlice";

const CommentItem = ({ item, boardId }) => {
	// Redux dispacher
	const dispatch = useDispatch();
	// 수정을 누른 댓글 id state
	const [editId, setEditId] = useState(null);
	// 수정 input 출력 여부 staet
	const [edit, setEdit] = useState(false);
	// 댓글 수정 값 state
	const [editValue, setEditValue] = useState({
		content: "",
	});

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
							<Button
								variant="comment-edit"
								onClick={() => dispatch(__editComment())}
							>
								수정
							</Button>
							<Button
								variant="comment-edit"
								onClick={() =>
									dispatch(
										__deleteComment({ commentId: item.commentId, boardId }),
									)
								}
							>
								삭제
							</Button>
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
