import StyledFeatures from "./Features.styled";
import { MdWaterDrop } from "react-icons/md";
import { GiPillDrop, GiGroupedDrops } from "react-icons/gi";
import { useTranslation } from "next-i18next";

const Features = () => {
	const { t } = useTranslation("banner");
	return (
		<StyledFeatures>
			<li>
				<MdWaterDrop />
				<h3>{t("feature_1_title")}</h3>
				<p>{t("feature_1_descr")}</p>
			</li>

			<li>
				<GiPillDrop />
				<h3>{t("feature_2_title")}</h3>
				<p>{t("feature_2_descr")}</p>
			</li>

			<li>
				<GiGroupedDrops />
				<h3>{t("feature_3_title")}</h3>
				<p>{t("feature_3_descr")}</p>
			</li>
		</StyledFeatures>
	);
};

export default Features;
