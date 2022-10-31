import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postWrite } from "../../redux/modules/wirte/writeSlice";
import { Box, Form, Input, Button, FirstHeading } from "../../common";
import { useNavigate } from "react-router-dom";

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

function Write() {
	const editorRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { write } = useSelector(state => state.write);
	const [isSubmit, setIsSubmit] = useState(false);
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

	const onSubmitHandle = e => {
		e.preventDefault();
		const editorInstance = editorRef.current.getInstance();
		const content = editorInstance.getMarkdown();
		// TODO
		// const getContent_html = editorInstance.getHTML();
		// const content = editorInstance.getHTML();

		console.log(input);
		console.log(content);

		setInput(prev => {
			return { ...prev, content: content };
		});
		setIsSubmit(true);
		// dispatch(__postWrite(input, content));
	};

	// c
	useEffect(() => {
		if (setIsSubmit) {
			dispatch(__postWrite(input));
		}
	}, [dispatch, input, isSubmit]);

	// const onUploadImage = (blob, callback) => {
	// 	console.log(blob);
	// };

	return (
		<>
			<Form onSubmit={onSubmitHandle}>
				<Input
					type="text"
					name="title"
					placeholder="제목을 입력해주세요"
					value={input.title}
					onChange={onChangeHandler}
				/>

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
					<Button type="submit">클릭</Button>
				</div>
			</Form>
			<div>
				<button
					type="button"
					onClick={() => {
						navigate("/main/");
					}}
				>
					나가기
				</button>
			</div>
		</>
	);
}

export default Write;
