import styled from "styled-components";

const StyledCard = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 4rem 2.3rem;
    text-align: center;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 6px 4px ${({ theme }) => theme.colors.primary};
    }
    @media (min-width: 768px) {
        width: 31%;
    }
`;

export default StyledCard;