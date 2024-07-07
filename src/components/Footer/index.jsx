import { List } from "../ui";
import { Container, FooterLeft, FooterRight, StyledFooter, SubTitle, Title } from "./Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterLeft>
                    <Title type="h2" color="white">Covid ID</Title>
                    <SubTitle type="h4" color="white">Developed by z.dacoder</SubTitle>
                </FooterLeft>
                <FooterRight>
                    <List />
                </FooterRight>
            </Container>
        </StyledFooter>
    )
}

export default Footer;
