import styled from "styled-components";
import { Heading } from "../ui";

const StyledSituationRegions = styled.div`
    width: 100%;
    padding: 4rem 3rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
    }
    @media (min-width: 992px) {
        padding: 6rem 6rem;
    }
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    flex-direction: column;
    @media (min-width: 768px) {
        margin-top: 3rem;
        gap: 2rem;
        flex-direction: row;
    }
`;

const TitleGroup = styled.div`
    text-align:center;
`;

const StyledIcon = styled.div`
    font-size: 1.7rem;
    color: ${({ theme, color }) => theme.colors[color]};
`;

const TitleCard = styled.div`
    text-align: left;
    margin-right: auto;
    margin-bottom: 0.1rem;
`;

const ValueCard = styled.div`
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
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

export { StyledSituationRegions, CardGroup, TitleGroup, StyledIcon, TitleCard, ValueCard, Title, SubTitle};  