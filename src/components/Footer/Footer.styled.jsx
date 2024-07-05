import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 1.2rem 2rem;
    
    @media (min-width: 768px) {
        padding: 1.2rem 6rem;
    
    }
`;

const Container = styled.div`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const FooterLeft = styled.div`
    padding-bottom : 0.15rem;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const FooterRight = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

export {StyledFooter, Container, FooterLeft, FooterRight};