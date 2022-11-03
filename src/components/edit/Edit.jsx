import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	__deleteWrite,
	__getWrite,
} from "../../redux/modules/wirte/writeSlice";
import { useEffect } from "react";
import { Box, Text, Button, Image } from "../../common";
import { Comment } from "../../components/comment";
import { Like } from "../../components/like";

function Edit() {
	// Redux dispacher
	const dispatch = useDispatch();
	// React Router
	const navigate = useNavigate();
	// 디테일 페이지 파라미터
	const { id } = useParams();
	// 디테일 페이지 게시물 정보
	const { write, boardItem } = useSelector(state => state.write);
	console.log("write =>", write);
	// id, boardItem 변경시 실행
	const { mainList } = useSelector(state => state.mainlist);
	let detail = null;
	if (mainList && mainList.length > 0) {
		const myData = mainList.find(myData => myData.boardId === parseInt(id));
		// console.log(myData);
		console.log(myData);
		detail = myData;
		// console.log(detail);
	}

	useEffect(() => {
		dispatch(__getWrite(id));
	}, [dispatch, id, boardItem]);
	// 게시글 삭제
	const onDeleteBtn = () => {
		dispatch(__deleteWrite(id));

		navigate("/");
	};

	// 로딩처리
	if (!write) {
		return <Box>Loading...</Box>;
	}

	return (
		<>
			<Box variant="user-title-box">
				<Box>
					<Text variant="user-header">{write?.title}</Text>

					<Box variant="user-edit-box">
						<Button variant="user-edit-btn">통계</Button>
						<Button
							variant="user-edit-btn1"
							onClick={() => {
								navigate(`/update/${id}`);
							}}
						>
							수정
						</Button>
						<Button
							type="button"
							variant="user-edit-btn1"
							onClick={onDeleteBtn}
						>
							삭제
						</Button>
					</Box>

					<Box variant="user-list-navi">
						<Box variant="user-username">
							<Box variant="user-username">
								{write?.writer} · {write?.dayBefore}
							</Box>
						</Box>
					</Box>
				</Box>
				<Image variant="image-box" src={detail.thumbnail} />
				<Box
					variant="tag-box"
					dangerouslySetInnerHTML={{ __html: write?.content }}
				></Box>
				<Box variant="user-info-box">
					<Box variant="user-detail-box">
						<Image variant="mypage-image" src={detail.thumbnail} />
						<Box variant="mypage-profile-box">
							<Box variant="mypage-id-box">{write?.boardId}</Box>
							<Box variant="mypage-name-box">{write?.writer}</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			{/* comment part */}
			<Comment write={write} />
			{/* like part */}
			<Like boardId={id} heartCount={write.heartCount} />
		</>
	);
}

export default Edit;
