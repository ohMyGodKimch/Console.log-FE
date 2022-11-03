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
			case "mypage-main-box":
				return css`
					max-width: 768px;
					width: 100%;
					margin-left: auto;
					margin-right: auto;
				`;
			case "mypage-info-box":
				return css`
					margin-top: 5.625rem;
					max-width: 1024px;
					padding-left: 1erm;
					padding-right: 1erm;
					box-sizing: inherit;
					display: block;
				`;
			case "mypage-info-detail-box":
				return css`
					display: flex;
					-webkit-box-align: center;
					align-items: center;
				`;
			case "mypage-image-box":
				return css`
					max-width: 768px;
					margin-left: 0px;
					margin-top: 1rem;
					display: flex;
					align-items: center;
					-webkit-box-pack: center;
				`;
			case "mypage-profile-box":
				return css`
					display: flex;
					flex-direction: column;
					-webkit-box-pack: center;
					justify-content: center;
					margin-left: 1rem;
				`;
			case "mypage-id-box":
				return css`
					font-size: 1.125rem;
					line-height: 1.5;
					font-weight: bold;
				`;
			case "mypage-name-box":
				return css`
					max-width: 768px;
					margin-top: 0.5rem;
					font-size: 0.875rem;
					letter-spacing: -0.004em;
				`;
			case "mypage-line-box":
				return css`
					background: rgb(233, 236, 239);
					max-width: 768px;
					margin-top: 2rem;
					margin-bottom: 1.5rem;
					width: 100%;
					height: 1px;
				`;
			case "user-title-box":
				return css`
					margin-top: 2rem;
					max-width: 768px;
					width: 100%;
					margin-left: auto;
					margin-right: auto;
					color: rgb(33, 37, 41);
				`;
			case "user-head-wrapper":
				return css`
					max-width: 1024px;
					padding-left: 1erm;
					padding-right: 1erm;
				`;
			case "user-edit-box":
				return css`
					max-width: 1024px;
					margin-top: -0.5rem;
					margin-bottom: 1.5rem;
					display: flex;
					justify-content: flex-end;
					color: rgb(33, 37, 41);
				`;
			case "main-item-sub-info":
				return css`
					padding: 1rem;
					width: 324px;
					font-size: 0.75rem;
					color: #8f969d;
				`;
			case "button-wrap":
				return css`
					width: 45px;
					height: 45px;
					border: 2px solid #e1e4e8;
					background-color: #ffffff;
					border-radius: 50%;
					transition: transform 200ms ease-in-out;
					&:hover {
						transform: scale(1.1);
					}
				`;
			case "like-wrap":
				return css`
					background-color: #f8f9fa;
					width: 62px;
					height: 148px;
					border: 2px solid #f1f3f5;
					border-radius: 50px;
				`;
			case "comment-wrap":
				return css`
					width: 768px;
					margin-top: 3rem;
					margin-left: auto;
					margin-right: auto;
					border-bottom: 1px solid #f1f3f5;
				`;
			case "comment-input-wrap":
				return css`
					width: 768px;
				`;
			case "comment-list-wraper":
				return css`
					margin-top: 2.5rem;
					width: 768px;
				`;
			case "comment-item-wrap":
				return css`
					padding: 24px 0;
				`;
			case "user-name-box":
				return css`
					-webkit-box-align: center;
					align-items: center;
					font-size: 1rem;
					display: flex;
					justify-content: space-between;
				`;
			case "user-list-navi":
				return css`
					font-size: 1rem;
					color: rgb(73, 80, 87);
				`;
			case "user-username":
				return css`
					font-size: 1rem;
					color: rgb(73, 80, 87);
				`;
			case "user-span":
				return css`
					margin-left: 0.5rem;
					margin-right: 0.5rem;
				`;
			case "tag-box":
				return css`
					margin-top: 5rem;
					max-width: 768px;
					font-size: 1.125rem;
					transition: color 0.125s;
					line-height: 1.7;
					letter-spacing: -0.004em;
					word-break: keep-all;
					overflow-wrap: break-word;
				`;
			case "comment-header":
				return css`
					margin-bottom: 1.5rem;
				`;
			case "comment-content":
				return css`
					font-size: 1.1rem;
					line-height: 1.7;
					letter-spacing: -0.004em;
					word-break: keep-all;
					overflow-wrap: break-word;
					margin: 18px 0;
				`;
			case "edit-wrap":
				return css`
					width: 80%;
				`;
			case "comment-info-wrap":
				return css``;
			default:
				break;
		}
	}}
`;
