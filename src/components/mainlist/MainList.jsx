import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Margin, Flex } from "../../common";
import { __getMainList } from "../../redux/modules/mainlist/mainlistSlice";
import { MainItem } from "../../components/mainlist";

const MainList = () => {
	const list = useSelector(state => state.mainlist.mainlist);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getMainList(1));
		console.log(1);
	}, [dispatch]);

	return (
		<Margin margin="30px 0 0 0">
			<Box variant="main-list-box">
				<Flex gap="30px" jc="center">
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					<MainItem />
					{/* {list && list.length > 0
				? list.map((boards, idx) => {
						return <MainItem />;
				  })
				: ""} */}
				</Flex>
			</Box>
		</Margin>
	);
};

export default MainList;
