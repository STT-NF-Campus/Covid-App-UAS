import { Heading, List } from "../ui";
import { Container, FooterLeft, FooterRight, StyledFooter } from "./Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterLeft>
                    <Heading type="h2" color="white">Covid ID</Heading>
                    <Heading type="h4" color="white">Developed by z.dacoder</Heading>
                </FooterLeft>
                <FooterRight>
                    <List />
                </FooterRight>
            </Container>
        </StyledFooter>
    )
}

export default Footer;
