//core
import Image from "next/image";

//i18n
import { useTranslation } from "next-i18next";

//container
import { Container } from "../common/Common.styled";

//styles
import StyledPageBanner, {
	Content,
	Main,
	PageTitle,
	PageBannerDescr,
	PageBannerImage,
} from "./PageBanner.styled";

const PageBanner = ({ type }) => {
	//function for internalisation
	const { t } = useTranslation();

	//DOM rendering starts here
	return (
		<StyledPageBanner type={type}>
			<Container>
				<Content>
					<Main>
						<PageTitle>
							{type === "male" && t("pageBanner:male_data.title")}
							{type === "female" && t("pageBanner:female_data.title")}
						</PageTitle>

						<PageBannerDescr>
							{type === "male" && t("pageBanner:male_data.descr")}
							{type === "female" && t("pageBanner:female_data.descr")}
						</PageBannerDescr>
					</Main>
				</Content>
			</Container>

			<PageBannerImage type={type}>
				<Image
					src={
						type === "male"
							? "/images/MalePageBannerImage.png"
							: "/images/FemalePageBannerImage.png"
					}
					alt="drug box image"
					width={800}
					height={630}
					layout="responsive"
					quality={100}
					priority
				/>
			</PageBannerImage>
		</StyledPageBanner>
	);
};

export default PageBanner;
