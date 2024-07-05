import styled from "styled-components";

const StyledCard = styled.div`
    /* flex: 1; */
    cursor: pointer;
    width: 31%;
    padding: 4rem 2.3rem;
    text-align: center;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.25)
`;

export default StyledCard;