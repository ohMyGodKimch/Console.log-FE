import styled, { css } from "styled-components";

export const Box = styled.div`
	background-color: ${({ bgc }) => (bgc ? bgc : "")};
	width: ${({ width }) => (width ? width : "")};
	padding: ${({ pd }) => (pd ? pd : "")};

	${({ variant }) => {
		switch (variant) {
			case "main-post-box":
				return css`
					width: 500px;
					height: 500px;
				`;
			case "main-item":
				return css`
					width: 324px;
					height: 377px;
					border-radius: 4px;
					box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
					background-color: #ffffff;
					transition: transform 400ms;
					&:hover {
						transform: translateY(-2%);
						box-shadow: rgb(0 0 0 / 10%) 0px 0px 16px 0px;
					}
				`;
			case "main-content":
				return css`
					padding: 1rem;
					width: 320px;
					height: 113px;
				`;
			case "main-item-info":
				return css`
					width: 325px;
					height: 46px;
					padding: 10px 16px;
					border-top: 1px solid #eeeeee;
				`;
			case "main-item-image":
				return css`
					width: 100%;
				`;
			case "main-list-box":
				return css`
					width: 100%;
				`;
			case "main-nav-relative":
				return css`
					position: relative;
				`;
			case "main-nav-select":
				return css`
					position: absolute;
					top: 50px;
					right: 0;
					width: 192px;
					background-color: #ffffff;
					box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
					z-index: 5;
				`;
			case "main-nav-select-item":
				return css`
					padding: 0.75rem 1rem;
					line-height: 1.5;
					font-weight: 400;
					cursor: pointer;
				`;
			case "signin":
				return css`
					width: 606px;
					height: 530px;
					box-shadow: rgb(0 0 0 / 10%) 0px 2px 12px 0px;
					background-color: #ffffff;
				`;
			default:
				break;
		}
	}}
`;
