import { useTranslation } from "next-i18next";

import StyledReviews, { Content } from "./Reviews.styled";
import { Container } from "../../common/Common.styled";
import Slider from "./Slider";
import { useEffect } from "react";
import { useState } from "react";

const Reviews = ({ male }) => {
	const { t } = useTranslation();

	const [isLoaded, setIsLoaded] = useState(null);

	useEffect(() => {
		setIsLoaded(true);
	}, []);
	return (
		<StyledReviews male={male}>
			<Container>
				<Content male={male}>
					<h2>
						{t("reviews:sectionTitle.title")}
						<span>{t("reviews:sectionTitle.title_span")}</span>
					</h2>
				</Content>
			</Container>
			{isLoaded && <Slider />}
		</StyledReviews>
	);
};

export default Reviews;
