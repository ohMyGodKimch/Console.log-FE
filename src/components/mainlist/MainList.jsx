import { Box, Margin, Flex } from "../../common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainItem } from "../../components/mainlist";
import { __getMainList } from "../../redux/modules/mainlist/mainlistSlice";

const MainList = () => {
	// Redux dispatcher
	const dispatch = useDispatch();
	// Redux Store
	const { mainList, isLoding } = useSelector(state => state.mainlist);
	// console.log("mainList => ", mainList, "isLoading =>", isLoding);

	useEffect(() => {
		dispatch(__getMainList());
	}, [dispatch]);
	// console.log(mainList);

	if (isLoding) return <div>로딩중</div>;

	return (
		<Margin margin="30px 0 0 0">
			<Box variant="main-list-box">
				<Flex gap="30px" jc="center">
					{mainList?.map(post => (
						<MainItem key={post.boardId} postData={post} />
					))}
				</Flex>
			</Box>
		</Margin>
	);
};

export default MainList;
