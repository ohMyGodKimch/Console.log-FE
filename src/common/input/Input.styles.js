import styled, { css } from "styled-components";

export const Input = styled.input`
	box-sizing: border-box;
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	padding: ${({ pd }) => (pd ? pd : "")};
	height: ${({ height }) => (height ? height : "")};
	width: ${({ width }) => (width ? width : "")};
	text-align: ${({ ta }) => (ta ? ta : "")};

	${({ variant }) => {
		switch (variant) {
			case "login-post-box":
				return css`
					width: 500px;
					height: 100px;
					background-color: beige;
				`;
			case "join":
				return css`
					width: 340px;
					height: 52px;
					padding: 16px;
					border: 1px solid #dee2e6;
					font-size: 15px;
					font-weight: 400;
					&:focus {
						border: 1px solid #21c997;
					}
				`;
			case "join-check":
				return css`
					width: 254px;
					height: 43px;
					padding: 16px;
					border: 1px solid #dee2e6;
					font-size: 15px;
					font-weight: 400;
					&:focus {
						border: 1px solid #21c997;
					}
				`;
			case "join-check-long":
				return css`
					width: 340px;
					height: 43px;
					padding: 16px;
					border: 1px solid #dee2e6;
					font-size: 15px;
					font-weight: 400;
					&:focus {
						border: 1px solid #21c997;
					}
				`;
			default:
				break;
		}
	}}
`;
