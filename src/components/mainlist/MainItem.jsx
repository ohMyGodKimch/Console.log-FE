import {
	Box,
	SecondHeading,
	Text,
	Flex,
	Image,
	Margin,
	DataList,
	DataDisc,
	DataTerm,
} from "../../common";
import { __getMainList } from "../../redux/modules/mainlist/mainlistSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainItem = () => {
	const [newList, setNewList] = useState([]);
	const list = useSelector(state => state.mainlist.mainlist);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(__getMainList());
	}, [dispatch]);

	useEffect(() => {
		if (list) setNewList(list.data);
	}, [list]);

	return (
		<>
			{newList && newList.length > 0
				? newList.map((newList, boardId) => {
						return (
							<Box
								key={boardId}
								variant="main-item"
								onClick={() => {
									navigate(`/edit/:id${boardId}`);
								}}
							>
								<Flex height="100%" width="100%" fd="column" jc="space-between">
									<Box variant="main-item-image">
										<Image variant="main-item" src="/images/flower.jpg" />
										<Box variant="main-content">
											<SecondHeading variant="item-header">
												{newList.title}
											</SecondHeading>
											<Text
												variant="main-item-content"
												dangerouslySetInnerHTML={{ __html: newList.content }}
											></Text>
										</Box>
									</Box>
									<Box variant="main-item-info">
										<Flex height="100%" ai="center">
											<Image
												alt="profile"
												src="/images/flower.jpg"
												variant="main-item-profile"
											/>
											<DataList variant="main-item">
												<Margin display="inline-block">
													<DataTerm variant="main-item">by</DataTerm>
												</Margin>
												<Margin display="inline-block" margin="0 0 0 5px">
													<DataDisc variant="main-item">지영</DataDisc>
												</Margin>
											</DataList>
										</Flex>
									</Box>
								</Flex>
							</Box>
						);
				  })
				: ""}
		</>
	);
};

export default MainItem;
