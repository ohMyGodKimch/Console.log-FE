import { Box, Margin, Flex } from "../../common";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainItem } from "../../components/mainlist";
import { __getNextList } from "../../redux/modules/mainlist/mainlistSlice";

const MainList = () => {
	// Redux dispatcher
	const dispatch = useDispatch();
	// Redux state - 페이지, 다음 페이지 유무 확인 state
	const { isNext, mainList, page } = useSelector(state => state.mainlist);
	console.log("isNext =>", isNext, "mainList =>", mainList, "page =>", page);
	// 페이지 요청 기준이 될 요소를 위한 ref객체
	const target = useRef(null);
	// isNext Redux state가 바뀔 경우 실행
	useEffect(() => {
		if (isNext) {
			// 관찰자 초기화
			// 관찰할 대상이 등록되거나 가시성에 변화가 생기면 관찰자는 콜백 실행
			const observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					dispatch(__getNextList());
				}
			});
			// 관찰할 대상(요소) 등록
			observer.observe(target.current);
			// 위 실행을 처리하고(1회) 관찰 중지
			return () => {
				observer.disconnect(observer);
			};
		}
	}, [dispatch, isNext]);

	return (
		<>
			<Margin margin="30px 0 0 0">
				<Box variant="main-list-box">
					<Flex gap="30px" jc="center">
						{mainList && (
							<>
								{mainList.map(item => (
									<MainItem key={item.boardId} postData={item} />
								))}
							</>
						)}
					</Flex>
					<div ref={target}></div>
				</Box>
			</Margin>
		</>
	);
};

export default MainList;
