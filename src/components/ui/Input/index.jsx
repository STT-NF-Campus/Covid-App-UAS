import styled from "styled-components";

const Input = styled.input`
    border-radius: 0.375rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 0.5rem;
    appearance: none;

    &:focus {
        outline: none;
    }
`;

export default Input;