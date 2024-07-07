import styled from "styled-components";

const Paragraph = styled.p`
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: ${({ theme }) => theme.fontsize.h5};
    
    @media (min-width: 768px) {
        font-size: ${({ theme, type }) => theme.fontsize[type]};
    }

`;

export default Paragraph;
