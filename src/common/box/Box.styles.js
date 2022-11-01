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
					cursor: pointer;

					&:hover {
						background-color: #f8f9fa;
						color: #21c997;
					}
				`;
			case "signin":
				return css`
					width: 606px;
					height: 530px;
					box-shadow: rgb(0 0 0 / 10%) 0px 2px 12px 0px;
					background-color: #ffffff;
				`;
			case "signup":
				return css`
					position: relative;
					width: 606px;
					height: 530px;
					box-shadow: rgb(0 0 0 / 10%) 0px 2px 12px 0px;
					background-color: #ffffff;
				`;
			case "join-title":
				return css`
					width: 216px;
					height: 100%;
					background-color: #f8f9fa;
				`;
			case "join-title-content":
				return css`
					width: 168px;
					height: 230px;
				`;
			case "join-btn-wrap":
				return css`
					position: relative;
				`;
			case "join":
				return css`
					width: 390px;
					height: 100%;
					padding: 25px;
				`;
			case "join-popup":
				return css`
					position: fixed;
					top: 0px;
					left: 0px;
					width: 100%;
					height: 100vh;
					z-index: 100;
				`;
			case "write-box":
				return css`
					max-height: 540px;
					box-sizing: inherit;
					display: block;
					font-family: "맑은 고딕";
					-webkit-font-smoothing: antialiased;
					color: var(--text1);
					input::placeholder {
						font-family: "맑은 고딕";
					}
				`;
			case "write-cover-box":
				return css`
					padding: 1rem;
					box-sizing: inherit;
				`;
			case "write-btn-box":
				return css`
					width: 50%;
					height: 64px;
					position: fixed;
					bottom: 0px;
					z-index: 10;
				`;
			case "write-btn-box1":
				return css`
					padding-left: 1rem;
					padding-right: 1rem;
					height: 4rem;
					width: 100%;
					box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
					background: var(--editor-footer);
					display: flex;
					-webkit-box-pack: justify;
					justify-content: space-between;
					-webkit-box-align: center;
					align-items: center;
				`;
			case "mypage-info-box":
				return css`
					margin-top: 5.625rem;
					box-sizing: border-box;
					color: rgb(33, 37, 41);
					display: block;
					padding-left: 1rem;
					padding-right: 1rem;
				`;
			case "mypage-image-box":
				return css`
					display: block;
					width: 8rem;
					height: 8rem;
					border-radius: 50%;
					object-fit: cover;
					box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
				`;
			case "main-item-sub-info":
				return css`
					padding: 1rem;
					width: 324px;
					font-size: 0.75rem;
					color: #8f969d;
				`;
			default:
				break;
		}
	}}
`;
