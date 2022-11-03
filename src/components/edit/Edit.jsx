import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	__deleteWrite,
	__getWrite,
} from "../../redux/modules/wirte/writeSlice";
import { useEffect, useState } from "react";
import { Box, Text, Button, Image } from "../../common";
import { Comment } from "../../components/comment";
import { Like } from "../../components/like";

function Edit() {
	const [newList, setNewList] = useState({});
	const [check, setCheck] = useState(false);

	// const params = useParams();
	// console.log(params);
	let detail = null;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { mainList } = useSelector(state => state.mainlist);
	const { write, boardItem } = useSelector(state => state.write);
	// console.log("write =>", write);
	const { id } = useParams();
	// console.log(write);
	// console.log(write.writer);
	// console.log(id);
	if (mainList && mainList.length > 0) {
		const myData = mainList.find(myData => myData.boardId === parseInt(id));
		console.log(myData);
		detail = myData;
		// console.log(detail);
	}
	// console.log("detail =>", detail);

	// id 변경시마다 값 가져오기 => 새로고침 가능하당!
	useEffect(() => {
		dispatch(__getWrite(id));
	}, [dispatch, id, boardItem]);

	useEffect(() => {
		if (write) setNewList(write.data);
	}, [write]);

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

					{write.writer !== write.writer ? (
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
					) : (
						""
					)}

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
			<Like write={write} />
		</>
	);
}

export default Edit;
