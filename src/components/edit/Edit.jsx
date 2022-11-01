import { useParams } from "react-router-dom";
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
	Button,
} from "../../common";
function Edit() {
	const { boardId } = useParams;
	console.log(boardId);
	return (
		<>
			<Box variant="user-title-box">
				<Box>
					<Text variant="user-header">제목이 들어갈 자리</Text>
					<Box variant="user-edit-box">
						<Button variant="user-edit-btn">통계</Button>
						<Button variant="user-edit-btn1">수정</Button>
						<Button variant="user-edit-btn1">삭제</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Edit;
