import { Box, Button, Input } from "../../common";
// React Hook
import { useEffect, useRef, useState } from "react";
// Axios
import axios from "axios";
// Toast 에디터
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
// Redux Dispatchr
import { useDispatch } from "react-redux";
// thunk 함수
import { __addBoardItem } from "../../redux/modules/mainlist/mainlistSlice";

const BASE_URL = process.env.REACT_APP_SERVER;

const Test = () => {
	// Redux Dispatcher
	const dispatch = useDispatch();
	// Editor DOM 선택용
	const editorRef = useRef();
	// 이미지 파일 업로드 함수
	const onUploadImage = async (blob, callback) => {
		console.log("blob =>", blob);
		const formData = new FormData();
		formData.append("images", blob);
		try {
			const response = await axios.post(
				`${BASE_URL}/boards/${1}/images`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);
			console.log("response.data imageUrl => ", response.data.data.imageUrl);
			callback(response.data.data.imageUrl);
		} catch (error) {
			console.log("error.data => ", error.data);
		}
	};
	// 테스트 값
	const [testValue, setTestValue] = useState({
		content: "",
		title: "",
	});
	// 등록 버튼 핸들러
	const handleRegisterButton = async () => {
		// 입력창에 입력한 내용을 MarkDown 형태로 취득
		setTestValue(prev => {
			return {
				...prev,
				content: editorRef.current?.getInstance().getHTML(),
			};
		});
		// dispatch(__addBoardItem(testValue));
		// console.log("testValue =>", testValue);
	};
	// useEffect로 testValue 동기적 처리
	useEffect(() => {
		if (testValue.content.length > 0 && testValue.title.length > 0)
			dispatch(__addBoardItem(testValue));
	}, [testValue, dispatch]);

	return (
		<>
			<Box>
				<h3>### Editor Toast</h3>
				<Input
					type="text"
					onChange={e =>
						setTestValue(prev => {
							return {
								...prev,
								title: e.target.value,
							};
						})
					}
					variant="join"
				/>
				{/* Toast 에디터 */}
				<Editor
					ref={editorRef}
					placeholder="내용을 입력해주세요."
					previewStyle="vertical" // 미리보기 스타일 지정
					height="700px" // 에디터 창 높이
					initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
					useCommandShortcut={false}
					language="ko-KR"
					hooks={{ addImageBlobHook: onUploadImage }}
				></Editor>
				<Button onClick={handleRegisterButton} variant="new-post">
					등록
				</Button>
			</Box>
		</>
	);
};

export default Test;
