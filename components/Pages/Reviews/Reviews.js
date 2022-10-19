import { useTranslation } from "next-i18next";

import StyledReviews, { Content } from "./Reviews.styled";
import { Container } from "../../common/Common.styled";
import Slider from "./Slider";

const Reviews = ({ male }) => {
	const { t } = useTranslation();

	return (
		<StyledReviews male={male}>
			<Container>
				<Content male={male}>
					<h2>
						{t("reviews:title")}
						<span>{t("reviews:title_span")}</span>
					</h2>
				</Content>
			</Container>
			<Slider />
		</StyledReviews>
	);
};

export default Reviews;
