import { Box, Button, Flex, Text } from "../../common";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addLike, __cancelLike } from "../../redux/modules/wirte/writeSlice";

const Like = ({ boardId, heartCount }) => {
	// Redux dispacher
	const dispatch = useDispatch();
	// 아이콘 변경 state
	const [action, setAction] = useState(false);

	return (
		<Box variant="detail-like">
			<Box variant="like-wrap">
				{action ? (
					<Flex
						fd="column"
						ai="center"
						jc="center"
						height="100%"
						width="100%"
						gap="10px"
					>
						<Box variant="button-wrap">
							<Flex width="100%" height="100%" jc="center" ai="center">
								<Button
									aria-label="like"
									variant="like"
									onClick={() => {
										setAction(prev => !prev);
										dispatch(__cancelLike(boardId));
									}}
								></Button>
							</Flex>
						</Box>
						<Text variant="like">{heartCount}</Text>
					</Flex>
				) : (
					<Flex
						fd="column"
						ai="center"
						jc="center"
						height="100%"
						width="100%"
						gap="10px"
					>
						<Box variant="button-wrap">
							<Flex width="100%" height="100%" jc="center" ai="center">
								<Button
									aria-label="un-like"
									variant="un-like"
									onClick={() => {
										setAction(prev => !prev);
										dispatch(__addLike(boardId));
									}}
								></Button>
							</Flex>
						</Box>
						<Text variant="like">{heartCount}</Text>
					</Flex>
				)}
			</Box>
		</Box>
	);
};

export default Like;
