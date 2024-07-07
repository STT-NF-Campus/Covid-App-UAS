import styled from "styled-components";
import { Heading } from "../ui";

const StyledSectionAbout = styled.section`
    padding: 3rem 3rem;
    text-align: center;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        padding: 3rem 4rem;
        margin-bottom: 0;
    }
    
    @media (min-width: 992px) {
        padding: 4.2rem 6rem;
        margin-bottom: 0;
    }
`;

const SectionContainer = styled.div``;

const SectionTitle = styled.div`
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        margin-bottom: 3.5rem;
    }
`;

const SectionImage = styled.div`
    margin-bottom: 2.7rem;
    img {
        width: 100%;
        margin: 0 auto;
        height: auto;
    }
    @media (min-width: 768px) {
        margin-bottom: 4rem;
        img {
            width: 83%;
        }
    }
`;

const SectionText = styled.div`
    text-align: justify;
`;

const Title = styled(Heading)`
    font-size: ${({ theme }) => theme.fontsize.h1};
    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontsize.display};
    }
`;

export { StyledSectionAbout, SectionContainer, SectionTitle, SectionImage, SectionText, Title};