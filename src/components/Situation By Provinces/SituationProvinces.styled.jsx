import styled from "styled-components";
import { Heading } from "../ui";

const StyledSituationProvinces = styled.div`
    width: 100%;
    padding: 4rem 3rem;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
    }
    @media (min-width: 992px) {
        padding: 6rem 13rem;
    }
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    overflow-x: auto;
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


export { StyledSituationProvinces, CardGroup, TitleGroup, Title, SubTitle};