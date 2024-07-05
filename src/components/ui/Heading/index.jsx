import styled from "styled-components";


const Heading = styled.p`
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: ${({ theme, type }) => theme.fontsize[type]};
`;

export default Heading;
