import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getMainList } from "../../redux/modules/mainlist/mainlistSlice";

function MainList() {
	const list = useSelector(state => state.mainlist.mainlist);
	console.log(list);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getMainList(1));
		console.log(1);
	}, [dispatch]);
	return (
		<>
			{list && list.length > 0
				? list.map((boards, idx) => {
						return (
							<form key={idx}>
								<div>velog</div>
								<br />
								<div>
									트렌딩
									<div>최신</div>
									<br />
									<div>
										<div>{boards.title}</div>
										<br />
										<div>{boards.coments}</div>
									</div>
								</div>
							</form>
						);
				  })
				: ""}
		</>
	);
}

export default MainList;
