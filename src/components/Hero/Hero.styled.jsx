import styled from "styled-components";
import Image from "../ui/Image/Image.styled.jsx";

const StyledHero = styled.div`
    padding: 0 2rem;

    @media (min-width: 768px) {
        padding: 0.5rem 4rem;
        display: flex;
        margin-top: 2.3rem ;
        margin-bottom: 4.3rem;
        align-items: center;
    }

    @media (min-width: 992px) {
        padding: 1.2rem 6rem;
    }
`;

const HeroLeft = styled.div`
    @media (min-width: 768px) {
        flex: 1;
    }
`;

const HeroRight = styled.div`
    @media (min-width: 768px) {
        flex: 1;
    }
`;

const HeroImage = styled(Image)`
    margin-bottom: -1.3rem;
`;

const TitleGroup = styled.div`
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
        margin-bottom: 1.5rem;
    }
`;

const DecriptionGroup = styled.div`
    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontsize.h4};
        padding-right: 2rem;    
    }
`;

const ButtonGroup = styled.div`
    text-align: center;
    margin-top: 2rem;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export { StyledHero, HeroLeft, HeroRight, TitleGroup, DecriptionGroup, ButtonGroup, HeroImage };