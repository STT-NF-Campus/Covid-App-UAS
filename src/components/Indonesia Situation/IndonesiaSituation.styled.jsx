import styled from "styled-components";

const StyledIndonesiaSituation = styled.div`
    background-color: #F8F9FA;
    width: 100%;
    padding: 3rem 2rem;
    @media (min-width: 768px) {
        padding: 4rem 4rem;
    }
    @media (min-width: 992px) {
        padding: 6rem 5rem;
    }
`;

const CardGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
`;


const TitleGroup = styled.div`
    text-align:center;
`;

export { StyledIndonesiaSituation, CardGroup, TitleGroup };  