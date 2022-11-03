import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __putWrite } from "../../redux/modules/wirte/writeSlice";
import { Box, Input, Button } from "../../common";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// TOAST UI Editor import
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

// TOAST UI Editor Plugins
import "tui-color-picker/dist/tui-color-picker.css";
import chart from "@toast-ui/editor-plugin-chart";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "tui-color-picker/dist/tui-color-picker.css";
// import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";

function Update() {
	const editorRef = useRef();
	const params = useParams();
	console.log(params);
	const { id } = useParams();
	console.log(id);
	// const { boardId } = useParams;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { write } = useSelector(state => state.write);
	const [isSubmit, setIsSubmit] = useState(false);
	const [input, setInput] = useState({
		id,
		title: "",
		content: "",
		images: [],
	});
	// console.log(boardId);
	const onChangeHandler = e => {
		const { name, value } = e.target;
		setInput(prev => {
			return { ...prev, [name]: value };
		});
	};

	const btnClickListener = e => {
		e.preventDefault();

		const editorInstance = editorRef.current.getInstance();

		const getContent_html = editorInstance.getHTML();
		const content = getContent_html;

		setInput(prev => {
			return { ...prev, content: content };
		});
		setIsSubmit(true);
	};

	const BASE_URL = process.env.REACT_APP_SERVER;
	const uploadImage = async (blob, callback) => {
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
			callback(response.data.data.imageUrl);
		} catch (error) {}
	};

	useEffect(() => {
		if (isSubmit) {
			dispatch(__putWrite(input));
			setIsSubmit(false);
		}
	}, [dispatch, navigate, input, isSubmit, id]);

	return (
		<>
			<Box variant="write-box">
				<Box variant="write-cover-box">
					<Input
						variant="write-input"
						type="text"
						name="title"
						placeholder="제목을 입력하세요"
						value={input.title}
						onChange={onChangeHandler}
					/>
				</Box>
			</Box>
			<>
				<Editor
					previewStyle="vertical"
					height="610px"
					initialEditType="markdown"
					placeholder="당신의 이야기를 적어보세요..."
					usageStatistics={false}
					plugins={[
						chart,
						codeSyntaxHighlight,
						// colorSyntax,
						tableMergedCell,
						uml,
					]}
					hooks={{
						addImageBlobHook: uploadImage,
					}}
					ref={editorRef}
				/>
			</>
			<Box variant="write-btn-box">
				<Box variant="write-btn-box1">
					<Button
						variant="write-left-btn"
						type="button"
						onClick={() => {
							navigate("/");
						}}
					>
						← 나가기
					</Button>
					<Button variant="write-wrigth-btn" onClick={btnClickListener}>
						출간하기
					</Button>
				</Box>
			</Box>
		</>
	);
}

export default Update;
