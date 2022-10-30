import {
	Box,
	Form,
	Input,
	Button,
	FirstHeading,
	Text,
	Image,
} from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { __requestSignIn } from "../../redux/modules/join/joinSlice";

const SignInForm = () => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// React Hook Form
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	// React Router
	const navigate = useNavigate();

	return (
		<Box variant="signin">
			<svg viewBox="0 0 25 25" height="1.5em" width="1.5em">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
			</svg>
			<Image
				src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
				alt="welcome"
			/>
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
