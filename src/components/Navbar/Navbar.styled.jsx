import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    @media (min-width: 768px) {
        padding: 0.5rem 4rem;
    }

    @media (min-width: 992px) {
        padding: 1.2rem 6rem;
    }

`;

const Container = styled.div`
    display: flex;
    padding: 1rem 0;
    align-items: start;
    flex-direction: column;


    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`;

const NavbarLeft = styled.div`
    color: white;
    display: flex;
    cursor: pointer;

    @media (min-width: 768px) {
    }
`;

const NavbarRight = styled.div`
    display: none;
    ${({ click }) => click && css`
        display: flex;
    `};

    @media (min-width: 768px) {
        display: flex;
    }
`;

const Toggle = styled.div`
    font-size: 2rem;
    cursor: pointer;
    color: white;
    margin : auto 0;

    @media (min-width: 768px) {
        display: none;
        margin-top: 0;
    }

    ${({ click }) => click && css`
        margin-top: 2.2rem;
        margin-bottom: auto;
    `}
`;


export { StyledNavbar, Container, NavbarLeft, NavbarRight, Toggle };