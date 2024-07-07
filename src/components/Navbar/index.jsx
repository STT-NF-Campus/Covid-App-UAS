import { useState } from 'react';
import { List } from '../ui';
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import { StyledNavbar, Container, NavbarLeft, NavbarRight, Toggle, NavbarTitle } from './Navbar.styled.jsx';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <StyledNavbar>
            <Container>
                <NavbarLeft>
                    <NavbarTitle type="h1" color="white">
                        Covid ID
                    </NavbarTitle>
                </NavbarLeft>
                <NavbarRight click={click} >
                    <List click={click} />
                </NavbarRight>
            </Container>
            <Toggle onClick={handleClick} click={click}>
                {click ? <RiCloseLargeLine /> : <FaBars />}
            </Toggle>
        </StyledNavbar>
    )
}


export default Navbar;