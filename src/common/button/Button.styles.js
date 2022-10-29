import styled, { css } from "styled-components";

export const Button = styled.button`
	${({ variant }) => {
		switch (variant) {
			case "login":
				return css`
					width: 100px;
					height: 50px;
				`;
			case "new-post":
				return css`
					height: 2rem;
					padding-left: 1rem;
					padding-right: 1rem;
					font-size: 1rem;
					border-radius: 1rem;
					font-weight: 600;
					word-break: keep-all;
					background-color: #f8f9fa;
					border: 1px solid black;
				`;
			default:
				break;
		}
	}}
`;
