import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postWrite } from "../../redux/modules/wirte/writeSlice";

function Write() {
	const { write } = useSelector(state => state.write);
	console.log(write);
	const dispatch = useDispatch();
	const [title, setTitle] = useState();
	const [content, setContent] = useState();

	// const id = new Date();
	const input = {
		title,
		content,
	};

	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch(__postWrite(input));
		console.log(input);
	};

	return (
		<>
			<form onSubmit={e => onSubmitHandler(e)}>
				<label>제목</label>
				<input
					type="text"
					name="title"
					value={title || ""}
					onChange={e => {
						setTitle(e.target.value);
					}}
				/>
				<br />
				<label>내용</label>
				<input
					type="text"
					name="content"
					value={content || ""}
					onChange={e => {
						setContent(e.target.value);
					}}
				/>
				<br />
				<button type="submit">출간하기</button>
			</form>
		</>
	);
}

export default Write;
