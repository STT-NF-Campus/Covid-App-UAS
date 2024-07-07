import styled from "styled-components";

const Dropdown = styled.select`
    width: 100%;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 0.8rem 0.5rem;
    font-size: ${({ theme, size }) => theme.fontsize[size] || theme.fontsize.paragraph};
    appearance: none;

    &:focus {
        outline: none;
    }
`;

const Option = styled.option``;

export { Dropdown, Option };