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
					padding-left: 0.9rem;
					padding-right: 0.9rem;
					font-size: 1rem;
					letter-spacing: 0.01rem;
					border-radius: 1rem;
					font-weight: 600;
					background-color: #f8f9fa;
					border: 1px solid black;
					cursor: pointer;
					transition: background-color 500ms, color 500ms;

					&:hover {
						background-color: #000000;
						color: #ffffff;
					}
				`;
			case "main-new":
				return css`
					width: 110px;
					font-size: 1.2rem;
					color: #212529;
					font-weight: 700;
					background-color: transparent;
					padding: 10px 5px 12px 0;
					border-bottom: 2px solid #212529;
					cursor: pointer;
				`;
			default:
				break;
		}
	}}
`;
