// core
import Image from "next/image";
import Link from "next/link";

//next-i18
import { useTranslation } from "next-i18next";

//container
import { Container } from "../common/Common.styled";

import Features from "./Features";

//styles
import StyledBanner, {
	Content,
	Title,
	TitleDescr,
	Main,
	Buttons,
	BannerButton,
	FamilyImage,
} from "./Banner.styled";

const Banner = () => {
	// function for internalisation
	const { t } = useTranslation();

	//DOM render start
	return (
		<StyledBanner id="Banner">
			<Container>
				<Content>
					<Title>
						<h1>FERTIZIL</h1>
						<TitleDescr>{t("banner:banner_descr")}</TitleDescr>
					</Title>

					<Main></Main>

					<Buttons>
						<BannerButton>
							<Link href="/male">{t("banner:button_male")}</Link>
						</BannerButton>
						<BannerButton>
							<Link href="/female">{t("banner:button_female")}</Link>
						</BannerButton>
					</Buttons>

					<FamilyImage>
						<Image
							src="/images/Banner_happy_family.png"
							alt="family image"
							objectFit="contain"
							width={740}
							height={787.5}
						/>
					</FamilyImage>
				</Content>
			</Container>
			<Features />
		</StyledBanner>
	);
};

export default Banner;
