import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postWrite } from "../../redux/modules/wirte/writeSlice";
import { Box, Input, Button } from "../../common";
import { useNavigate } from "react-router-dom";
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

function Write() {
	const editorRef = useRef();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { write } = useSelector(state => state.write);
	const [isSubmit, setIsSubmit] = useState(false);
	const [input, setInput] = useState({
		title: "",
		content: "",
		images: [],
	});

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setInput(prev => {
			return { ...prev, [name]: value };
		});
	};

	const btnClickListener = e => {
		e.preventDefault();

		const editorInstance = editorRef.current.getInstance();
		const getContent_md = editorInstance.getMarkdown();
		const content = getContent_md;

		// TODO
		const getContent_html = editorInstance.getHTML();
		const content = getContent_html;
		// const content = getContent_html;
		// console.log(content);

		setInput(prev => {
			return { ...prev, content: content };
		});
		setIsSubmit(true);
	};

	const uploadImage = async (blob, callback) => {
		const formData = new FormData();
		formData.append("file", blob);

		// 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
		const url = await axios.post(`${BASE_URL}/boards/${1}/images`, {
			header: { "content-type": "multipart/formdata" },
			body: {
				formData,
			},
		});
		console.log(url);
		// 2. 첨부된 이미지를 화면에 표시
		// if (url) {
		// 	callback(url, "image");
		// 	images.push(blob);
		// }

		console.log(blob);
	};

	useEffect(() => {
		if (isSubmit) {
			dispatch(__postWrite(input));
			setIsSubmit(false);
			navigate("/");
		}
	}, [dispatch, navigate, input, isSubmit]);
	const BASE_URL = process.env.REACT_APP_SERVER;

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
							navigate("/main/");
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

export default Write;
