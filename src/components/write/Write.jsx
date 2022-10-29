import React from "react";

function Write() {
	return (
		<form>
			<label>제목</label>
			<input type="text" name="title" style={{ border: "1px solid" }} />
			<br />

			<label>내용</label>
			<input type="text" name="coment" style={{ border: "1px solid" }} />

			<br />

			<button type="submit" name="button">
				버튼
			</button>
		</form>
	);
}

export default Write;
