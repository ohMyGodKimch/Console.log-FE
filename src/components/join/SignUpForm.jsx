import { Box, Form, Input, Button, FirstHeading, Text } from "../../common";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	__isIdExist,
	__isNicknameExist,
	__requestSignUp,
} from "../../redux/modules/join/joinSlice";

const SignUpForm = () => {
	// Redux dispatcer
	const dispatch = useDispatch();
	// Redux state
	const { isCheckedNickname, isCheckedId } = useSelector(state => state.join);
	console.log(
		"isCheckedNickname, isChekedId =>",
		isCheckedNickname,
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

	return (
		<Box>
			<FirstHeading>회원 가입</FirstHeading>
			<Form
				onSubmit={handleSubmit(values => {
					console.log("values =>", values);
					if (isCheckedId && isCheckedNickname) {
						const { nickname, id, password } = values;
					}
				})}
			>
				<Input
					{...register("nickname", { required: true })}
					onChange={e => {
						setInputValue(prev => {
							return {
								...prev,
								nickNameValue: e.target.value,
							};
						});
					}}
				/>
				{errors.nickname && <Text>닉네임을 입력해주세요.</Text>}
				<Button
					disable={isCheckedNickname}
					onClick={() => {
						dispatch(__isNicknameExist(inputValue.nickNameValue));
					}}
				>
					증복 확인
				</Button>
				<Input
					{...register("id", {
						required: true,
						pattern: /^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,10}$/,
					})}
					onChange={e => {
						setInputValue(prev => {
							return {
								...prev,
								idValue: e.target.value,
							};
						});
					}}
				/>
				{errors.id && errors.id.type === "required" && (
					<Text>아이디를 입력해주세요.</Text>
				)}
				{errors.id && errors.id.type === "pattern" && (
					<Text>4~10자의 영문 대,소문자를 필수로 입력해주세요.</Text>
				)}
				<Button
					disable={isCheckedId}
					onClick={() => {
						dispatch(__isIdExist(inputValue.idValue));
					}}
				>
					중복 확인
				</Button>
				<Input
					{...register("password", {
						required: true,
						pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/,
					})}
				/>
				{errors.password && errors.password.type === "required" && (
					<Text variant="join-alert-text">비밀번호를 입력해주세요.</Text>
				)}
				{errors.password && errors.password.type === "pattern" && (
					<Text variant="join-alert-text">
						8 ~ 20자의 영문 대,소문자,숫자를 필수로 입력해주세요.
					</Text>
				)}
				<Input
					{...register("passwordConfirm", {
						required: true,
						validate: value => value === password.current,
					})}
				/>
				{errors.passwordConfirm &&
					errors.passwordConfirm.type === "required" && (
						<Text>비밀번호를 재입력해주세요.</Text>
					)}
				{errors.passwordConfirm &&
					errors.passwordConfirm.type === "validate" && (
						<Text>비밀번호가 일치하지 않습니다.</Text>
					)}
				<Button>회원 가입</Button>
			</Form>
		</Box>
	);
};

export default SignUpForm;
