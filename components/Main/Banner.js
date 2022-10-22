// core
import Image from "next/image";
import Link from "next/link";

//next-i18
import { useTranslation } from "next-i18next";

//container
import { Container } from "../common/Common.styled";

//styles
import StyledBanner, {
	Content,
	Title,
	TitleDescr,
	Main,
	MainFeature,
	Buttons,
	BannerButton,
	FamilyImage,
} from "./Banner.styled";

const Banner = ({ spermIcons }) => {
	// function for internalisation
	const { t } = useTranslation();

	//DOM render start
	return (
		<StyledBanner id="Banner" icons={spermIcons}>
			<Container>
				<Content>
					<Title>
						<h1>FERTIZIL</h1>
						<TitleDescr>{t("banner:banner_descr")}</TitleDescr>
					</Title>

					<Main>
						<MainFeature>
							<h3>{t("banner:feature_title")}</h3>
							<p>{t("banner:feature_descr")}</p>
						</MainFeature>
					</Main>

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
							width={1021}
							height={922}
						/>
					</FamilyImage>
				</Content>
			</Container>
		</StyledBanner>
	);
};

export default Banner;
