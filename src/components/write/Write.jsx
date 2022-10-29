import { useState } from "react";
import { useDispatch } from "react-redux";

function Write() {
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	const onCHangeHandler = e => {
		const { name, value } = e.target;
		setInput(prev => {
			return { ...prev, [name]: value };
		});
	};

	const handleAddInput = e => {
		e.preventDefault();
	};

	return (
		<>
			<wrap>
				<form onsubmit={e => handleAddInput(e)}>
					<label>제목</label>
					<input
						type="text"
						name="title"
						value={input.title}
						onchange={onCHangeHandler}
					/>
					<br />
					<label>내용</label>
					<input
						type="text"
						name="content"
						value={input.content}
						onchange={onCHangeHandler}
					/>
					<br />
					<button type="submit">출간하기</button>
				</form>
			</wrap>
		</>
	);
}

export default Write;
