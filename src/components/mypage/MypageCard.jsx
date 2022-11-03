import {
	Box,
	SecondHeading,
	Text,
	Flex,
	Image,
	Margin,
	DataList,
	DataDesc,
	DataTerm,
} from "../../common";
import { __getMypage } from "../../redux/modules/mypage/mypageSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const MypageCard = ({ borderId }) => {
	const mypage = useSelector(state => state.mypage.mypage);
	console.log(mypage);
	const dispatch = useDispatch();

	console.log(borderId);
	useEffect(() => {
		dispatch(__getMypage(borderId));
		console.log(1);
	}, [dispatch, borderId]);

	return (
		<>
			{mypage && mypage.length > 0
				? mypage.map((mypage, id) => {
						return (
							<Box key={id} variant="main-item">
								<Flex height="100%" width="100%" fd="column" jc="space-between">
									<Box variant="main-item-image">
										<Image variant="main-item" src="/images/flower.jpg" />
										<Box variant="main-content">
											<SecondHeading variant="item-header">
												{mypage.title}
											</SecondHeading>
											<Text
												variant="main-item-content"
												dangerouslySetInnerHTML={{
													__html: mypage.content,
												}}
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
													<DataDesc variant="main-item">지영</DataDesc>
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

export default MypageCard;
