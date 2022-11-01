import {
	Box,
	Form,
	Input,
	Button,
	FirstHeading,
	Text,
	Image,
	Flex,
	Margin,
} from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
	__requestSignIn,
	resetSignUpStatus,
} from "../../redux/modules/join/joinSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = ({
	isLoginClick,
	setIsLoginClick,
	isSignUpClick,
	setIsSignUpClick,
}) => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// React Hook Form
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	// Redux state -> 로그인 성공 실패 여부
	const { signInStatusCode, isLoading } = useSelector(state => state.join);
	// 알림창
	const signInRejectAlert = () =>
		toast.error("아이디나 비밀번호를 다시 확인해주세요.");
	// 로그인 성공, 실패에 따른 처리
	useEffect(() => {
		if (signInStatusCode === 200 && !isLoading) {
			dispatch(resetSignUpStatus());
			setIsLoginClick(!isLoginClick);
		} else if (signInStatusCode === 400 && !isLoading) {
			dispatch(resetSignUpStatus());
			signInRejectAlert();
		}
	}, [setIsLoginClick, isLoginClick, signInStatusCode, isLoading, dispatch]);

	return (
		<>
			<Box variant="join-popup">
				<Flex width="100%" height="100vh" ai="center" jc="center">
					<Box variant="signin">
						<Flex fw="no-wrap" width="100%" height="100%">
							<Box variant="join-title">
								<Flex height="100%" jc="center" ai="center">
									<Box variant="join-title-content">
										<Image
											src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
											alt="welcome image"
											variant="join"
										/>
										<Text variant="join">환영합니다!</Text>
									</Box>
								</Flex>
							</Box>
							<Box variant="join">
								<Flex fd="column" width="100%">
									<Flex width="100%" jc="flex-end">
										<Margin margin="0 0 36px 0">
											<Button
												variant="join-close"
												onClick={() => {
													setIsLoginClick(!isLoginClick);
												}}
											>
												<svg viewBox="0 0 25 25" height="2em" width="2em">
													<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
												</svg>
											</Button>
										</Margin>
									</Flex>
									<Margin margin="0 0 40px 0">
										<FirstHeading variant="join">로그인</FirstHeading>
									</Margin>
									<Flex fd="column" height="350px" jc="space-between">
										<Box>
											<Form
												onSubmit={handleSubmit(values => {
													console.log("values =>", values);
													dispatch(
														__requestSignIn({
															name: values.id,
															password: values.password,
														}),
													);
												})}
											>
												<Margin margin="20px 0 10px 0">
													<Input
														variant="join"
														placeholder="아이디를 입력해주세요."
														{...register("id", { required: true })}
													/>
												</Margin>
												{errors.id && errors.id.type === "required" && (
													<Text variant="join-alert">
														아이디를 입력해주세요.
													</Text>
												)}

												<Margin margin="30px 0 10px 0">
													<Input
														variant="join"
														placeholder="비밀번호를 입력해주세요."
														{...register("password", { required: true })}
													/>
												</Margin>
												{errors.password &&
													errors.password.type === "required" && (
														<Text variant="join-alert">
															비밀번호를 입력해주세요.
														</Text>
													)}
												<Box variant="join-btn-wrap">
													<Button variant="sign-in">로그인</Button>
												</Box>
											</Form>
										</Box>
										<Flex width="100%" jc="flex-end" ai="center" gap="5px">
											<Text>아직 회원이 아니신가요?</Text>
											<Button
												variant="signin-signup"
												onClick={() => {
													setIsSignUpClick(!isSignUpClick);
												}}
											>
												회원가입
											</Button>
										</Flex>
									</Flex>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Box>
			<ToastContainer style={{ width: "400px" }} />
		</>
	);
};

export default SignInForm;
