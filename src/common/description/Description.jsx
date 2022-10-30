import * as styles from "./Description.styles";

export const DataList = ({ children, ...props }) => {
	return <styles.DataList {...props}>{children}</styles.DataList>;
};

export const DataDisc = ({ children, ...props }) => {
	return <styles.DataDisc {...props}>{children}</styles.DataDisc>;
};

export const DataTerm = ({ children, ...props }) => {
	return <styles.DataTerm {...props}>{children}</styles.DataTerm>;
};
