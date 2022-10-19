import StyledHeader from "./Header.styled";
import Navbar from "./Navbar";
import { MenuData } from "../../data/data";

const Header = () => {
    return (
        <StyledHeader>
            <Navbar data={MenuData}/>
        </StyledHeader>
    );
}
 
export default Header;