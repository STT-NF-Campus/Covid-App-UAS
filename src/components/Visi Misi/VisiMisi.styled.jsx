import styled from "styled-components";
import { Heading } from "../ui";

const StyledVisiMisi = styled.div`
    background-color: #F8F9FA;
    padding: 5rem 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
        gap: 4rem;
    }
    @media (min-width: 992px) {
        padding: 7rem 6rem ;
        gap: 8rem;
    }
`;

const VisiContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 0;
    }
`;

const MisiContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 0;
    }
`;

const LeftSide = styled.div`
    flex: 1;
    margin-top: 2rem;
    img{
            width: 85%;
            margin: 0 auto;
    }
    @media (min-width: 768px) {
        margin-top: 0;
        img{
            width: 82%;
            margin-right: auto;
        }
    }
`;
const RightSide = styled.div`
    flex: 1;
    margin-top: 2rem;
    img{
            width: 90%;
            margin: 0 auto;
    }
    @media (min-width: 768px) {
        margin-top: 0;
        img{
            width: 85%;
            margin-left: auto;
        }
    }
`;

const Title = styled(Heading)`
    font-size: ${({ theme }) => theme.fontsize.h1};
    text-align: center;
    font-weight: 500;
    @media (min-width: 768px) {
        font-weight:normal;
        text-align: left;
        font-size: ${({ theme }) => theme.fontsize.display};
    }
`;

const TitleContainer = styled.div``;
const TextContainer = styled.div`
    text-align: justify;
    margin-top: 1rem;
    @media (min-width: 768px) {
        text-align: left;
        margin-top: 0;
    }
`;

export { StyledVisiMisi, VisiContainer, MisiContainer, LeftSide, RightSide, TitleContainer, TextContainer, Title} 