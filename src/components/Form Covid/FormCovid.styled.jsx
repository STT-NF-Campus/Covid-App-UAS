import styled from "styled-components";
import { Heading } from "../ui";

const StyledFormCovid = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 6rem 3rem 4rem 3rem;
    background-color: #F8F9FA;
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 4rem 4rem;
    }
    @media (min-width: 992px) {
        padding: 6rem 6rem;
    }
`;

const FormLeft = styled.div`
    margin-top:auto;
    margin-bottom:3.5rem;
    @media (min-width: 768px) {
        margin-bottom:1.5rem;
    }
    flex: 1;
`;

const FormRight = styled.div`
    flex: 1;
`;

const FormItem = styled.div`
    width: 90%;
    @media (min-width: 768px) {
        width: 66.666667%;
    }
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled(Heading)`
    font-size: ${({ theme }) => theme.fontsize.h1};
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
        font-size: ${({ theme }) => theme.fontsize.display};
    }
`;

export { StyledFormCovid, FormLeft, FormRight, FormItem, Title };