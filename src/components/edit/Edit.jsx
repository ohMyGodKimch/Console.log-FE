import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __deleteWrite } from "../../redux/modules/wirte/writeSlice";
import { useEffect, useState } from "react";
import { __getMainList } from "../../redux/modules/mainlist/mainlistSlice";
import {
	Box,
	Text,
	Flex,
	Image,
	Margin,
	DataList,
	DataDisc,
	DataTerm,
	Button,
} from "../../common";
function Edit() {
	const [myData, setMyData] = useState();
	// const params = useParams();
	// console.log(params);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { mainList } = useSelector(state => state.mainlist);
	// console.log(mainList);
	const { id } = useParams();

	if (mainList && mainList.length > 0) {
		const myData = mainList.find(myData => myData.boardId === parseInt(id));
		// console.log(myData);
		// setMyData(myData);
	}

	useEffect(() => {
		dispatch(__getMainList());
	}, [dispatch]);

	const onDeleteBtn = () => {
		dispatch(__deleteWrite(id));
		navigate("/");
	};
	return (
		<>
			<Box variant="user-title-box">
				<Box>
					<Text variant="user-header">title</Text>
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
							<Box variant="user-username">username ·</Box>
						</Box>
					</Box>
				</Box>
				<Box variant="image-box">이미지</Box>
				<Box variant="tag-box">내용</Box>
			</Box>
		</>
	);
}

export default Edit;
