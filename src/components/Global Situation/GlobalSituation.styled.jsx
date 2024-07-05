import styled from "styled-components";

const StyledGlobalSituation = styled.div`
    background-color: #F8F9FA;
    width: 100%;
    padding: 3rem 2rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
    }
    @media (min-width: 992px) {
        padding: 7rem 6rem;
    }
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 3rem;
`;


const TitleGroup = styled.div`
    text-align:center;
`;

export {StyledGlobalSituation, CardGroup, TitleGroup};  