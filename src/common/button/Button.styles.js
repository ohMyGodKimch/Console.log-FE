import styled, { css } from "styled-components";

export const Button = styled.button`
	&:hover {
		opacity: 0.8;
	}
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
			case "write-left-btn":
				return css`
					height: 2.5rem;
					padding: 0.5rem 1rem;
					-webkit-box-align: center;
					align-items: center;
					background: none;
					border-radius: 4px;
					cursor: pointer;
					border: none;
					display: flex;
					outline: none;
					color: var(--text1);
					text-align: center;
					height: 40px;
					font-weight: 400;
					font-size: 1.125rem;
					:hover {
						background: #e9ecef;
					}
				`;
			case "write-wrigth-btn":
				return css`
					margin-left: 0.75rem;
					height: 2.5rem;
					font-size: 1.125rem;
					display: inline-flex;
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: center;
					justify-content: center;
					font-weight: bold;
					cursor: pointer;
					outline: none;
					border: none;
					background: var(--primary1);
					color: var(--button-text);
					border-radius: 4px;
					padding: 0px 1.25rem;
					appearance: auto;
					background-attachment: scroll;
					background-clip: border-box;
					background-color: rgb(18, 184, 134);
					color: white;
				`;
			case "user-edit-btn":
				return css`
					max-width: 768px;
					font-size: 0.875rem;
					text-align: center;
					font-weight: 400;
					background-color: rgb(0, 0, 0, 0);
					background-origin: padding-box;
				`;
			case "user-edit-btn1":
				return css`
					max-width: 768px;
					margin-left: 0.5rem;
					font-size: 0.875rem;
					text-align: center;
					font-weight: 400;
					background-color: rgb(0, 0, 0, 0);
					background-origin: padding-box;
				`;
			default:
				break;
		}
	}}
`;
