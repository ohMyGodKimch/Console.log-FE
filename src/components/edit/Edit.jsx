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
	// const params = useParams();
	// console.log(params);
	let detail = null;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, mainList } = useSelector(state => state.mainlist);
	const { write } = useSelector(state => state.write);
	// console.log(mainList);
	const { id } = useParams();

	if (mainList && mainList.length > 0) {
		const myData = mainList.find(myData => myData.boardId === parseInt(id));
		console.log(myData);
		detail = myData;
		console.log(detail);
	}
	console.log(detail);
	console.log(detail.title);

	useEffect(() => {
		dispatch(__getWrite(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (write) setNewList(write.data);
	}, [write]);

	const onDeleteBtn = () => {
		dispatch(__deleteWrite(id));
		navigate("/");
	};

	return (
		<>
			<Box variant="user-title-box">
				<Box>
					<Text variant="user-header">{detail.title}</Text>
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
							<Box variant="user-username">{detail.writer} ·</Box>
						</Box>
					</Box>
				</Box>
				<Image variant="image-box" src={detail.thumbnail} />
				<Box
					variant="tag-box"
					dangerouslySetInnerHTML={{ __html: detail.content }}
				></Box>
			</Box>
			{/* comment part */}
			<Comment />
			{/* like part */}
			<Like boardId={id} />
		</>
	);
}

export default Edit;
