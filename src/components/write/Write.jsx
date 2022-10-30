// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { __postWrite } from "../../redux/modules/wirte/writeSlice";

// import { Box, Form, Input, Button, FirstHeading } from "../../common";
// import Editor from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";

// function Write() {
// 	const { write } = useSelector(state => state.write);
// 	const dispatch = useDispatch();
// 	const [title, setTitle] = useState();
// 	const [content, setContent] = useState();

// 	// const id = new Date();
// 	const input = {
// 		title,
// 		content,
// 	};

// 	const onSubmitHandler = e => {
// 		e.preventDefault();
// 		dispatch(__postWrite(input));
// 		console.log(input);
// 	};

// 	// const Editor = toastui.Editor;

// 	// const editor = new Editor({
// 	// 	el: document.querySelector("#editor"),
// 	// 	height: "500px",
// 	// 	initialEditType: "markdown",
// 	// 	previewStyle: "vretical",
// 	// });

// 	// editor.getMarkdown();

// 	return (
// 		<>
// 			<body>
// 				<div id="editor"></div>
// 			</body>

// 			<Form onSubmit={e => onSubmitHandler(e)}>
// 				<label>제목</label>
// 				<Input
// 					type="text"
// 					name="title"
// 					value={title || ""}
// 					onChange={e => {
// 						setTitle(e.target.value);
// 					}}
// 				/>
// 				<br />
// 				<label>내용</label>
// 				<Input
// 					type="text"
// 					name="content"
// 					value={content || ""}
// 					onChange={e => {
// 						setContent(e.target.value);
// 					}}
// 				/>
// 				<br />
// 				<Button type="submit">출간하기</Button>
// 			</Form>
// 		</>
// 	);
// }

// export default Write;
// export default editor;
import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { __postWrite } from "../../redux/modules/wirte/writeSlice";

import { Box, Form, Input, Button, FirstHeading } from "../../common";

// TOAST UI Editor import

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

// TOAST UI Editor Plugins
// import "tui-chart/dist/tui-chart.css";
import chart from "@toast-ui/editor-plugin-chart";
// import "highlight.js/styles/github.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "tui-color-picker/dist/tui-color-picker.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";
import { useNavigate } from "react-router-dom";

function Write() {
	const editorRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate;
	const { write } = useSelector(state => state.write);
	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	const onChangeHandler = e => {
		const { name, value } = e.target;
		setInput(prev => {
			return { ...prev, [name]: value };
		});
	};

	// const btnClickListener = () => {
	// 	const editorInstance = editorRef.current.getInstance();
	// 	const getContent_md = editorInstance.getMarkdown();
	// 	// console.log("마 크 다 운");
	// 	console.log(getContent_md);
	// 	const getContent_html = editorInstance.getHTML();
	// 	// const content = getContent_html;
	// 	// console.log("마 크 다 운");
	// 	console.log(getContent_html);
	// 	console.log();
	// 	// console.log(content);
	// 	dispatch(__postWrite(input, getContent_html));
	// };
	// console.log(input);

	const btnClickListener = () => {
		const editorInstance = editorRef.current.getInstance();
		const content = editorInstance.getMarkdown();
		// TODO const getContent_html = editorInstance.getHTML();

		console.log(content);

		setInput(prev => {
			return { ...prev, content: content };
		});

		dispatch(__postWrite(input));
		console.log(1);
	};

	// const onUploadImage = (blob, callback) => {
	// 	console.log(blob);
	// };

	return (
		<>
			<Box>
				<Input
					type="text"
					name="title"
					placeholder="제목을 입력해주세요"
					value={input.title}
					onChange={onChangeHandler}
				/>
			</Box>
			<Editor
				height="600px"
				placeholder="내용을 입력해주세요"
				usageStatistics={false}
				previewStyle="vertical"
				initialEditType="markdown"
				plugins={[
					chart,
					codeSyntaxHighlight,
					colorSyntax,
					tableMergedCell,
					uml,
				]}
				ref={editorRef}
				// hooks={{
				// 	addImageBlobHook: onUploadImage,
				// }}
			/>
			<div>
				<Button
					onClick={() => {
						navigate("/main/");
					}}
				>
					나가기
				</Button>
				<Button onClick={btnClickListener}>클릭</Button>
			</div>
		</>
	);
}

export default Write;
