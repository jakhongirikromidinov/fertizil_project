//core
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//i18n
import { useTranslation } from "next-i18next";

//src
import { AiOutlineClose } from "react-icons/ai";

//styles
import Header from "../Header/Header";
import Footer from "../Main/Footer";
import {
	BurgerMenu,
	BurgerMenuList,
	StyledDots,
	Overlay,
	CloseIcon,
	ImageWrapper,
} from "./Common.styled";
import { Circle5, Circle4, Circle3, Circle2, Circle1 } from "./Common.styled";

export const Layout = ({ children, footer }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			{footer && <Footer id="footer" />}
		</>
	);
};
export const Circle = () => {
	return (
		<Circle5>
			<Circle4>
				<Circle3>
					<Circle2>
						<Circle1></Circle1>
					</Circle2>
				</Circle3>
			</Circle4>
		</Circle5>
	);
};

export const Dropdown = ({ isOpen }) => {
	const router = useRouter();
	const { t } = useTranslation();
	return (
		<BurgerMenu isOpen={isOpen}>
			<BurgerMenuList>
				{t("common:navbar", { returnObjects: true }).map((item, index) => (
					<li
						key={index}
						className={item.path === router.pathname ? "bold" : ""}
					>
						<Link href={item.path}>{item.title}</Link>
					</li>
				))}
			</BurgerMenuList>
		</BurgerMenu>
	);
};

export const MakeDots = ({ amount, male }) => {
	let pieces = Array(amount).fill(null);

	return (
		<StyledDots male={male}>
			{pieces.map((span, index) => (
				<span key={index} />
			))}
		</StyledDots>
	);
};
export const Tab_icon_1 = () => {
	return (
		<svg
			className="tab_hovered"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_130_441)">
				<path
					d="M2.80807 1.39294L21.1921 19.7779L19.7781 21.1919L16.0311 17.4449L12.0001 21.4849L3.52007 12.9929C1.48007 10.7089 1.49207 7.23994 3.55407 4.96994L1.39307 2.80794L2.80807 1.39294V1.39294ZM4.98007 11.6229L12.0001 18.6539L14.6171 16.0309L4.97207 6.38594C3.67807 7.88294 3.67207 10.1209 4.98007 11.6229V11.6229ZM20.2431 4.75694C22.5051 7.02494 22.5831 10.6369 20.4791 12.9929L18.8441 14.6289L17.4301 13.2149L19.0201 11.6229C20.3941 10.0469 20.3191 7.66494 18.8271 6.16994C17.3271 4.66794 14.9071 4.60694 13.3371 6.01694L12.0021 7.21494L10.6661 6.01794C10.3161 5.70394 9.92507 5.46294 9.51107 5.29494L7.26107 3.04494C8.92907 2.83894 10.6681 3.33394 12.0011 4.52894C14.3501 2.41994 17.9801 2.48994 20.2431 4.75694Z"
					fill="var(--black)"
				/>
			</g>
			<defs>
				<clipPath id="clip0_130_441">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const Tab_icon_2 = () => {
	return (
		<svg
			className="tab_hovered"
			width="24"
			height="24"
			viewBox="0 0 18 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17 0C17.552 0 18 0.448 18 1V19C18 19.552 17.552 20 17 20H3C2.448 20 2 19.552 2 19V17H0V15H2V13H0V11H2V9H0V7H2V5H0V3H2V1C2 0.448 2.448 0 3 0H17ZM16 2H4V18H16V2ZM11 6V9H14V11H10.999L11 14H9L8.999 11H6V9H9V6H11Z"
				fill="black"
			/>
		</svg>
	);
};

export const Tab_icon_3 = () => {
	return (
		<svg
			className="tab_hovered"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_130_451)">
				<path
					d="M16 1C16.552 1 17 1.448 17 2V5H21C21.552 5 22 5.448 22 6V20C22 20.552 21.552 21 21 21H3C2.448 21 2 20.552 2 20V6C2 5.448 2.448 5 3 5H7V2C7 1.448 7.448 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H12.999L13 17H11L10.999 14H8V12H11V9H13ZM15 3H9V5H15V3Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_130_451">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const Tab_icon_4 = () => {
	return (
		<svg
			className="tab_hovered"
			width="24"
			height="24"
			viewBox="0 0 24 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.485 0.121035L20.243 2.06103C20.688 2.17103 21 2.57104 21 3.03104V4.00004H22C23.1 4.00004 24 4.90004 24 6.00004V9.00004C24 10.657 22.657 12 21 12H20.579C20.044 13.35 19.027 14.486 17.683 15.158L12.894 17.553C12.331 17.834 11.669 17.834 11.106 17.553L6.316 15.158C4.974 14.486 3.957 13.35 3.422 12H3C1.343 12 0 10.657 0 9.00004V6.00004C0 4.89504 0.895 4.00004 2 4.00004H3V3.03004C3 2.57204 3.312 2.17203 3.757 2.06003L11.515 0.121035C11.833 0.0410352 12.167 0.0410352 12.485 0.121035ZM12 2.06103L5 3.81103V9.79104C5 11.307 5.856 12.691 7.211 13.37L12 15.764L16.789 13.37C18.144 12.692 19 11.307 19 9.79204V3.81203L12 2.06203V2.06103ZM3 6.00004H2V9.00004C2 9.55204 2.448 10 3 10V6.00004ZM22 6.00004H21V10C21.552 10 22 9.55204 22 9.00004V6.00004Z"
				fill="black"
			/>
		</svg>
	);
};

export const NavbarChevron = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 9L12 15L18 9"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const NavbarGlobe = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 12H22"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const NavbarPhoneIcon = () => {
	return (
		<svg
			width="23"
			height="23"
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1_303)">
				<path
					d="M14.4229 4.79168C15.359 4.9743 16.2192 5.43209 16.8936 6.10645C17.5679 6.78081 18.0257 7.64106 18.2083 8.57709M14.4229 0.958344C16.3676 1.17439 18.1811 2.04526 19.5656 3.42798C20.95 4.81069 21.8232 6.62306 22.0417 8.56751M21.0833 16.215V19.09C21.0844 19.3569 21.0298 19.6211 20.9228 19.8656C20.8159 20.1102 20.6591 20.3297 20.4624 20.5101C20.2657 20.6906 20.0336 20.8279 19.7807 20.9134C19.5279 20.9989 19.26 21.0307 18.9942 21.0067C16.0452 20.6862 13.2125 19.6786 10.7238 18.0646C8.40826 16.5932 6.44512 14.6301 4.97376 12.3146C3.35415 9.8145 2.34624 6.96805 2.03167 4.00584C2.00773 3.74083 2.03922 3.47374 2.12415 3.22157C2.20909 2.9694 2.3456 2.73767 2.52499 2.54115C2.70439 2.34462 2.92274 2.18761 3.16614 2.08009C3.40954 1.97258 3.67267 1.91693 3.93876 1.91668H6.81376C7.27884 1.9121 7.72972 2.07679 8.08236 2.38006C8.435 2.68333 8.66533 3.10448 8.73042 3.56501C8.85177 4.48507 9.07681 5.38846 9.40126 6.25793C9.53019 6.60094 9.5581 6.97372 9.48167 7.3321C9.40524 7.69049 9.22767 8.01945 8.97001 8.28001L7.75292 9.49709C9.11716 11.8963 11.1037 13.8829 13.5029 15.2471L14.72 14.03C14.9806 13.7723 15.3095 13.5948 15.6679 13.5183C16.0263 13.4419 16.3991 13.4698 16.7421 13.5988C17.6116 13.9232 18.5149 14.1482 19.435 14.2696C19.9005 14.3353 20.3257 14.5697 20.6296 14.9284C20.9335 15.2871 21.095 15.745 21.0833 16.215Z"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1_303">
					<rect width="23" height="23" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const Modal = ({ clickedImg, handleClick }) => {
	return (
		<Overlay>
			<ImageWrapper>
				<Image src={clickedImg} layout="fill" objectFit="contain" />
				<CloseIcon>
					<AiOutlineClose className="dismiss" onClick={handleClick} />
				</CloseIcon>
			</ImageWrapper>
		</Overlay>
	);
};
