import styled from "styled-components";

const StyledImage = styled.img`
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(0.95) rotate(3deg);
    }
    @media(min-width: 768px) {
        height: 100% ;
        width: 100% ;
    };
`;

export default StyledImage;