//core
import { useTranslation } from "next-i18next";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

//container
import { Container, LogoOriginal } from "../common/Common.styled";

//src
import LogoPicOriginal from "../../public/images/Navbar_logo_original.png";
import FooterCircle from "../../public/images/Circle_cropped.png";

//styles
import StyledFooter, {
	Content,
	Company,
	CompanyDescr,
	SocialLinks,
	InstagramLogo,
	TelegramLogo,
	FacebookLogo,
	Useful,
	Contacts,
	CircleWrapper,
} from "./Footer.styled";

const Footer = () => {
	//function for internalisation
	const { t } = useTranslation("footer");

	//DOM rendering starts here
	return (
		<StyledFooter>
			<Container>
				<Content>
					<Company>
						<LogoOriginal>
							<Image
								src={LogoPicOriginal}
								alt="logo image"
								objectFit="contain"
							/>
						</LogoOriginal>

						<CompanyDescr>{t("descr")};</CompanyDescr>
					</Company>

					<Useful>
						<h3>{t("item_title_1")}</h3>

						<ul>
							<li>
								<Link href="/male">{t("item_link_male")}</Link>
							</li>
							<li>
								<Link href="/female">{t("item_link_female")}</Link>
							</li>
							<li>
								<Link href="/">{t("item_link_manufacturer")}</Link>
							</li>
						</ul>
					</Useful>

					<Contacts>
						<h3>{t("item_title_2")}</h3>

						<ul>
							<li>
								<a href="tel:+998987074922">+998 (98) 707-49-22</a>
							</li>
							<li>
								<a href="tel:+998987074911">+998 (98) 707-49-11</a>
							</li>
						</ul>

						<SocialLinks>
							<a href="https://www.instagram.com/avensis_group/">
								<InstagramLogo />
							</a>
							<a href="https://t.me/avensis_group">
								<TelegramLogo />
							</a>
							<a href="https://facebook.com/avensis.group">
								<FacebookLogo />
							</a>
						</SocialLinks>
					</Contacts>
				</Content>
			</Container>

			<CircleWrapper>
				<Image src={FooterCircle} objectFit="fill" />
			</CircleWrapper>
		</StyledFooter>
	);
};

export default Footer;
