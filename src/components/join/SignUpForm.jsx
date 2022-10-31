import {
	Box,
	Form,
	Input,
	Button,
	FirstHeading,
	Text,
	Flex,
	Image,
	Margin,
} from "../../common";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	__isIdExist,
	__isNicknameExist,
	__requestSignUp,
	resetIdCheck,
	resetNicknameCheck,
} from "../../redux/modules/join/joinSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// Redux state
	const { isCheckedNickname, isCheckedId } = useSelector(state => state.join);
	console.log(
		"isCheckedNickname =>",
		isCheckedNickname,
		"isChekedId =>",
		isCheckedId,
	);
	// React Hook Form
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	// 닉네임, 아이디 중복 검사를 위한 state
	const [inputValue, setInputValue] = useState({
		nickNameValue: "",
		idValue: "",
	});
	// 비밀번호 재입력값 확인
	const password = useRef();
	password.current = watch("password");
	// 알림창
	const idAlert = () => toast.error("아이디 중복체크를 해주세요.");
	const nickNameAlert = () => toast.error("닉네임 중복체크를 해주세요.");
	const bothAlert = () => toast.error("닉네임과 아이디 중복체크를 해주세요.");

	return (
		<>
			<Box variant="join-popup">
				<Flex width="100%" height="100vh" ai="center" jc="center">
					<Box variant="signup">
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
										<Margin margin="0 0 20px 0">
											<Button variant="join-close" onClick={() => {}}>
												<svg viewBox="0 0 25 25" height="2em" width="2em">
													<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
												</svg>
											</Button>
										</Margin>
									</Flex>
									<Margin margin="0 0 18px 0">
										<FirstHeading variant="join">회원 가입</FirstHeading>
									</Margin>
									<Form
										onSubmit={handleSubmit(values => {
											console.log("values =>", values);
											if (isCheckedId && isCheckedNickname) {
												const { nickname, id, password } = values;
												dispatch(
													__requestSignUp({ nickname, name: id, password }),
												);
											} else if (!isCheckedId && !isCheckedNickname) {
												bothAlert();
											} else if (!isCheckedId) {
												idAlert();
											} else if (!isCheckedNickname) {
												nickNameAlert();
											}
										})}
									>
										<Margin margin="10px 0 10px 0">
											<Input
												variant="join-check"
												placeholder="닉네임을 입력해주세요."
												{...register("nickname", { required: true })}
												onChange={e => {
													dispatch(resetNicknameCheck());
													setInputValue(prev => {
														return {
															...prev,
															nickNameValue: e.target.value,
														};
													});
												}}
											/>
											<Button
												type="button"
												disabled={isCheckedNickname}
												onClick={() => {
													dispatch(__isNicknameExist(inputValue.nickNameValue));
												}}
												variant="join-check"
											>
												증복확인
											</Button>
										</Margin>
										{errors.nickname && (
											<Text variant="join-alert">닉네임을 입력해주세요.</Text>
										)}
										{isCheckedNickname ? (
											<Text variant="join-alert">
												사용할 수 있는 닉네임입니다.
											</Text>
										) : (
											""
										)}
										<Margin margin="10px 0 10px 0">
											<Input
												variant="join-check"
												placeholder="아이디를 입력해주세요."
												{...register("id", {
													required: true,
													pattern: /^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,10}$/,
												})}
												onChange={e => {
													dispatch(resetIdCheck());
													setInputValue(prev => {
														return {
															...prev,
															idValue: e.target.value,
														};
													});
												}}
											/>

											<Button
												type="button"
												disabled={isCheckedId}
												onClick={() => {
													dispatch(__isIdExist(inputValue.idValue));
												}}
												variant="join-check"
											>
												중복확인
											</Button>
										</Margin>
										{errors.id && errors.id.type === "required" && (
											<Text variant="join-alert">아이디를 입력해주세요.</Text>
										)}
										{errors.id && errors.id.type === "pattern" && (
											<Text variant="join-alert">
												4~10자의 영문 대,소문자를 필수로 입력해주세요.
											</Text>
										)}
										{isCheckedId ? (
											<Text variant="join-alert">
												사용할 수 있는 아이디입니다.
											</Text>
										) : (
											""
										)}
										<Margin margin="10px 0 10px 0">
											<Input
												placeholder="비밀번호를 입력해주세요."
												{...register("password", {
													required: true,
													pattern:
														/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/,
												})}
												variant="join-check-long"
											/>
										</Margin>
										{errors.password && errors.password.type === "required" && (
											<Text variant="join-alert">비밀번호를 입력해주세요.</Text>
										)}
										{errors.password && errors.password.type === "pattern" && (
											<Text variant="join-alert">
												8 ~ 20자의 영문 대,소문자,숫자를 필수로 입력해주세요.
											</Text>
										)}
										<Margin margin="10px 0 5px 0">
											<Input
												placeholder="비밀번호를 재입력해주세요."
												{...register("passwordConfirm", {
													required: true,
													validate: value => value === password.current,
												})}
												variant="join-check-long"
											/>
										</Margin>
										{errors.passwordConfirm &&
											errors.passwordConfirm.type === "required" && (
												<Text variant="join-alert">
													비밀번호를 재입력해주세요.
												</Text>
											)}
										{errors.passwordConfirm &&
											errors.passwordConfirm.type === "validate" && (
												<Text variant="join-alert">
													비밀번호가 일치하지 않습니다.
												</Text>
											)}
										<Button variant="sign-up">회원가입</Button>
									</Form>
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

export default SignUpForm;
