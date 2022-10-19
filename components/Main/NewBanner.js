import StyledBanner, { Row, Main, Buttons, Family, Features } from "./NewBanner.styled";
import Image from "next/image";
import FamilyPNG from "../../public/images/family.png";


const NewBanner = () => (
	<StyledBanner>
		<Row>
			<Main>
				<h1>Fertizil</h1>
				<p>
					Препарат для комплексного лечения бесплодия и метаболических
					нарушений организма
				</p>
			</Main>

			<Buttons>
				<button>Для мужчин</button>
				<button>Для женщин</button>
			</Buttons>

			<Family>
				<Image src={FamilyPNG} alt="Счастливая семья" />
			</Family>
		</Row>

		<Features />
	</StyledBanner>
);

export default NewBanner;