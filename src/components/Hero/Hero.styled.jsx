import styled from "styled-components";
import Image from "../ui/Image/Image.styled.jsx";
import { Heading } from "../ui";

const StyledHero = styled.div`
    display: flex;
    padding: 3.5rem 3rem;
    align-items: center;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0.5rem 4rem;
        margin-top: 2.3rem ;
        margin-bottom: 4.3rem;
    }

    @media (min-width: 992px) {
        padding: 1.2rem 6rem;
        flex-direction: row;
    }
`;

const HeroLeft = styled.div`
    margin-top: 2.5rem;
    @media (min-width: 768px) {
        margin-top: 0;
        flex: 1;
    }
`;

const HeroRight = styled.div`
    @media (min-width: 768px) {
        flex: 1;
    }
`;

const HeroImage = styled(Image)`
    @media (min-width: 768px) {
        margin-bottom: -1.3rem;
    }
`;

const TitleGroup = styled.div`
    text-align: center;
    margin-bottom: 0;
    @media (min-width: 768px) {
        text-align: left;
        margin-bottom: 1.5rem;
    }
`;

const DecriptionGroup = styled.div`
    text-align: justify;
    padding: 1rem 0;
    @media (min-width: 768px) {
        text-align: left;
        font-size: ${({ theme }) => theme.fontsize.h4};
        padding-right: 2rem;    
        padding-top: 0;
        padding-bottom: 0;
    }
`;

const ButtonGroup = styled.div`
    text-align: center;
    margin-top: 0.8rem;

    @media (min-width: 768px) {
        margin-top: 2rem;
        text-align: left;
    }
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

export { StyledHero, HeroLeft, HeroRight, TitleGroup, DecriptionGroup, ButtonGroup, HeroImage, Title, SubTitle};