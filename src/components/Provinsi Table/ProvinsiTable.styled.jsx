import styled from "styled-components";
import { Heading } from "../ui";

const StyledProvinsiTable = styled.div`
    width: 100%;
    padding: 4rem 3rem;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
        margin-bottom: 0;
    }
    @media (min-width: 992px) {
        padding: 5rem 14rem;
    }
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    overflow-x: auto;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 6px 9px ${({ theme }) => theme.colors.primary};
    }
    @media (min-width: 768px) {
        gap: 1rem;
        margin-top: 3rem;
        overflow-x: none;
    }
`;

const TitleGroup = styled.div`
    text-align:center;
`;

const Title = styled(Heading)`
    font-size: ${({ theme }) => theme.fontsize.h1};
    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontsize.display};
    }
`;

const SubTitle = styled(Heading)`
    font-size: ${({ theme }) => theme.fontsize.h5};
    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontsize.h4};
    }
`;


export { StyledProvinsiTable, CardGroup, TitleGroup, Title, SubTitle};