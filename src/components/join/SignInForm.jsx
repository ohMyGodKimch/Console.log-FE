import { Box, Form, Input, Button, FirstHeading } from "../../common";

const SignInForm = () => {
	return (
		<Box>
			<FirstHeading>로그인</FirstHeading>
			<Form>
				<Input />
				<Input />
				<Button>로그인</Button>
			</Form>
		</Box>
	);
};

export default SignInForm;
