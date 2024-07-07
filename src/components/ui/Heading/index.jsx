import styled from "styled-components";

const Heading = styled.h6`
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: ${({ theme, type }) => theme.fontsize[type]};
    font-weight: normal;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-0.5rem);
    }
`;

export default Heading;