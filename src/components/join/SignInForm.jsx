import { Box, Form, Input, Button, FirstHeading, Text } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { __requestSignIn } from "../../redux/modules/join/joinSlice";

const SignInForm = () => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// Redux state
	const join = useSelector(state => state.join);
	// React Hook Form
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	// React Router
	const navigate = useNavigate();

	return (
		<Box>
			<FirstHeading>로그인</FirstHeading>
			<Form
				onSubmit={handleSubmit(values => {
					console.log("values =>", values);
					dispatch(
						__requestSignIn({ name: values.id, password: values.password }),
					);
				})}
			>
				<Input placeholder="id" {...register("id", { required: true })} />
				{errors.id && errors.id.type === "required" && (
					<Text>아이디를 입력해주세요.</Text>
				)}
				<Input placeholder="pw" {...register("password", { required: true })} />
				{errors.password && errors.password.type === "required" && (
					<Text>비밀번호를 입력해주세요.</Text>
				)}
				<Button>로그인</Button>
			</Form>
			<Text>아직 회원이 아니신가요?</Text>
			<Button onClick={() => navigate("/join/signup")}>회원가입</Button>
		</Box>
	);
};

export default SignInForm;
