import StyledFeatures from "./Features.styled";
import { MdWaterDrop } from "react-icons/md";
import { GiPillDrop, GiGroupedDrops } from "react-icons/gi";

const Features = () => {
	return (
		<StyledFeatures>
			<li>
				<MdWaterDrop />
				<h3>Омега 3</h3>
				<p>
					Содержит Omega 3, которая увеличивает антиоксидантную активность в
					семенной жидкости, повышает подвижность и морфологию сперматозоидов.
				</p>
			</li>

			<li>
				<GiPillDrop />
				<h3>Фолиевая кислота</h3>
				<p>
					Содержит фолиевую кислоту, необходимую при планировании беременности
					для предупреждения развития патологий у плода
				</p>
			</li>

			<li>
				<GiGroupedDrops />
				<h3>Витамин Е</h3>
				<p>
					Содержит витамин Е беременности для предупреждения развития патологий
					у плода активность в семенной жидкости, повышает подвижность
				</p>
			</li>
		</StyledFeatures>
	);
};

export default Features;
