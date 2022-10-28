import * as styles from "./Heading.styles";

export const FirstHeading = ({ chidren, ...props }) => {
  return <styles.FirstHeading {...props}>{chidren}</styles.FirstHeading>;
};

export const SecondHeading = ({ children, ...props }) => {
  return <styles.SecondHeading {...props}>{children}</styles.SecondHeading>;
};

export const ThirdHeading = ({ children, ...props }) => {
  return <styles.ThirdHeading></styles.ThirdHeading>;
};
