import styled from "styled-components";

const StyledSituationRegions = styled.div`
    width: 100%;
    padding: 3rem 2rem;
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
    gap: 2rem;
    margin-top: 3rem;
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

export { StyledSituationRegions, CardGroup, TitleGroup, StyledIcon, TitleCard, ValueCard};  