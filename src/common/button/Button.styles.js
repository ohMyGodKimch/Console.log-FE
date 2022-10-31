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
			case "new-post-login":
				return css`
					height: 2rem;
					padding-left: 0.9rem;
					padding-right: 0.9rem;
					font-size: 1rem;
					letter-spacing: 0.01rem;
					border-radius: 1rem;
					font-weight: 600;
					border: 1px solid black;
					cursor: pointer;
					transition: opacity 500ms, color 500ms;
					background-color: #000000;
					color: #ffffff;
					&:hover {
						opacity: 0.8;
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
			case "join-close":
				return css`
					background-color: transparent;
					cursor: pointer;
				`;
			case "sign-in":
				return css`
					background-color: #21c997;
					width: 96px;
					height: 48px;
					font-weight: 500;
					font-size: 15px;
					color: #ffffff;
					border-radius: 2px;
					position: absolute;
					top: 40px;
					left: 117px;
					cursor: pointer;
				`;
			case "sign-up":
				return css`
					background-color: #21c997;
					width: 96px;
					height: 48px;
					font-weight: 500;
					font-size: 15px;
					color: #ffffff;
					border-radius: 2px;
					position: absolute;
					bottom: 40px;
					left: 362px;
					cursor: pointer;
				`;
			case "join-check":
				return css`
					background-color: #21c997;
					width: 80px;
					height: 43px;
					margin-left: 6px;
					font-weight: 500;
					font-size: 15px;
					color: #ffffff;
					border-radius: 2px;
					cursor: pointer;
				`;
			case "signin-signup":
				return css`
					color: #21c997;
					font-size: 16px;
					font-weight: 500;
					background-color: transparent;
				`;
			default:
				break;
		}
	}}
`;
