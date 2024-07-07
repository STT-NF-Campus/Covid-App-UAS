import styled from "styled-components";
import { Heading } from "../ui";

const StyledIndonesiaSituation = styled.div`
    background-color: #F8F9FA;
    width: 100%;
    padding: 4rem 3rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
    }
    @media (min-width: 992px) {
        padding: 7.2rem 6rem;
    }
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
    flex-direction: column;
    @media (min-width: 768px) {
        gap: 2rem;
        justify-content: center;
        flex-direction: row;
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

export { StyledIndonesiaSituation, CardGroup, TitleGroup, Title, SubTitle};  