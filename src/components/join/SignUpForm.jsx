import { Box, Form, Input, Button, FirstHeading } from "../../common";

const SignUpForm = () => {
	return (
		<Box>
			<FirstHeading>회원 가입</FirstHeading>
			<Form>
				<Input />
				<Button>증복 확인</Button>
				<Input />
				<Button>중복 확인</Button>
				<Input />
				<Input />
				<Button>회원 가입</Button>
			</Form>
		</Box>
	);
};

export default SignUpForm;
