import { Box, Form, Input, Button, FirstHeading, Image } from "../../common";

function MyapgeInfo() {
	return (
		<>
			<Box variant="mypage-main-box">
				<Box variant="mypage-info-box">
					<Box variant="mypage-info-detail-box">
						<Box variant="mypage-image-box">
							<Image variant="mypage-image" src="/images/flower.jpg" />
							<Box variant="mypage-profile-box">
								<Box variant="mypage-id-box">ID 들어갈 자리?</Box>
								<Box variant="mypage-name-box">닉네임?</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box variant="mypage-line-box" />
			</Box>
		</>
	);
}

export default MyapgeInfo;
