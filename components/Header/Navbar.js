// core
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

// libs
import { Rotate as Hamburger } from "hamburger-react";

//data
import LogoPic from "../../public/images/Navbar_logo.png";
import LogoPicOriginal from "../../public/images/Navbar_logo_original.png";
import { MenuData } from "../../data/data";

// components
import StyledNavbar, {
	NavbarList,
	Content,
	NavbarBurger,
} from "./Navbar.styled";
import { Container, Logo, LogoOriginal } from "../common/Common.styled";
import LangDropdown from "./LangDropdown";
import { Dropdown, Navbar_chevron } from "../common/Common";

export const Navbar = ({ data }) => {
	const router = useRouter();

	const { t } = useTranslation();
	console.log(t("common"));
	//Nav Sidebar
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		isOpen === true
			? document.body.classList.add("hidden")
			: document.body.classList.remove("hidden");
	}, [isOpen]);

	//

	//lang dropdown

	return (
		<StyledNavbar>
			<Container>
				<Content>
					<Logo>
						<Image src={LogoPic} alt="logo image" objectFit="contain" className="transparent" />
					</Logo>
					<LogoOriginal>
						<Image
							src={LogoPicOriginal}
							alt="logo image"
							objectFit="contain"
							className="original"
						/>
					</LogoOriginal>

					<LangDropdown />
					<NavbarList>
						{t("common:navbar", { returnObjects: true }).map(
							(item, index) => (
								<li key={index} className={item.path === router.pathname ? "bold" : ""}>
									<Link href={item.path}>{item.title}</Link>
								</li>
							)
						)}
					</NavbarList>

					<NavbarBurger>
						<Hamburger
							toggled={isOpen}
							toggle={setIsOpen}
							color="var(--primary100)"
						/>
					</NavbarBurger>

					<Dropdown toggle={toggle} links={MenuData} isOpen={isOpen} />
				</Content>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
