import { useState } from 'react';
import { Heading, List } from '../ui';
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

import { StyledNavbar, Container, NavbarLeft, NavbarRight, Toggle } from './Navbar.styled.jsx';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <StyledNavbar>
            <Container>
                <NavbarLeft>
                    <Heading type="h1" color="white">
                        Covid ID
                    </Heading>
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

export default Navbar
