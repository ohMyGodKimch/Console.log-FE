import styled, { css } from "styled-components";

export const Form = styled.form`
	${({ variant }) => {
		switch (variant) {
			case "signIn":
				return css`
					width: 500px;
					height: 500px;
					background-color: aqua;
				`;
			default:
				break;
		}
	}}
`;
