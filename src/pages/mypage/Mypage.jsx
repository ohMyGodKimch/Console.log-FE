import MypageCard from "./../../components/mypage/MypageCard";
import * as styles from "./MypageLayout.styles";
import { Flex } from "../../common";
import { MainNav } from "../../components/mainlist";
import { MyapgeInfo } from "../../components/mypage";

function Mypage() {
	return (
		<>
			{" "}
			<Flex width="100%" height="100vh" jc="center">
				<styles.MypageLayout>
					<MainNav />
					<MyapgeInfo />
					<MypageCard />
				</styles.MypageLayout>
			</Flex>
		</>
	);
}

export default Mypage;
