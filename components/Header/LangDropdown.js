import { useState } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

import {
	LangDropDown,
	LangDropDownList,
	LangDropDownVariant,
	LangDropDownChosen,
	GlobeIcon,
} from "./LangDropdown.styled";

import { Navbar_chevron } from "../common/Common";

const LangDropdown = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const router = useRouter();

	const [chosenLang, setChosenLang] = useState(
		router.locale === "ru" ? "Русский" : router.locale === "uz" ? "Ўзбекча" : ""
	);

	const handleChangingLang = () => {
		setIsDropDownOpen(!isDropDownOpen);
		chosenLang === "Русский"
			? setChosenLang("Ўзбекча")
			: setChosenLang("Русский");
	};

	return (
		<LangDropDown>
			<GlobeIcon />
			<LangDropDownChosen>
				{chosenLang}
				<LangDropDownList className="list">
					{router.locale === 'uz' && (
						<LangDropDownVariant onClick={handleChangingLang}>
							<Link href={router.pathname} locale={router.locales[0]}>
								Русский
							</Link>
						</LangDropDownVariant>
					)}
					{router.locale === 'ru' && (
						<LangDropDownVariant onClick={handleChangingLang}>
							<Link href={router.pathname} locale={router.locales[1]}>
								Ўзбекча
							</Link>
						</LangDropDownVariant>
					)}
				</LangDropDownList>
			</LangDropDownChosen>
			{/* <DropdownIcon className="arrow" /> */}
			<Navbar_chevron />
		</LangDropDown>
	);
};

export default LangDropdown;
