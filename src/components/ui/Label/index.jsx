import styled from "styled-components";

const Label = styled.label`
    font-size: ${({ theme }) => theme.fontsize.paragraph};
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
`;

export default Label;