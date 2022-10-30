import { Flex } from "../../common";
import { SignInForm } from "../../components/join";

const SignInPage = () => {
	return (
		<Flex width="100%" height="100vh" ai="center" jc="center">
			<SignInForm />
		</Flex>
	);
};

export default SignInPage;
