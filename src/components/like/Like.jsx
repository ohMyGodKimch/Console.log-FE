import { Box, Button, Flex, Text } from "../../common";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addLike, __cancelLike } from "../../redux/modules/wirte/writeSlice";

const Like = () => {
	const dispatch = useDispatch();
	const [action, setAction] = useState(false);
	const [likeCount, setLikeCount] = useState(0);

	return (
		<Box>
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
										dispatch(__cancelLike());
									}}
								></Button>
							</Flex>
						</Box>
						<Text variant="like">{likeCount}</Text>
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
										dispatch(__addLike());
									}}
								></Button>
							</Flex>
						</Box>
						<Text variant="like">{likeCount}</Text>
					</Flex>
				)}
			</Box>
		</Box>
	);
};

export default Like;
