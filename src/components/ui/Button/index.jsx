import styled, { css } from "styled-components";

const Button = styled.button`
    cursor: pointer;
    border: none;
    color: white;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    ${({ size, theme }) => size && css`
        padding: ${theme.button[size]} ;
        font-size: ${size === 'sm' ? theme.fontsize.paragraph :
            size === 'md' ? theme.fontsize.h4 :
                size === 'lg' ? theme.fontsize.h2 :
                    size === 'xl' ? theme.fontsize.h1 : theme.fontsize.paragraph
        };
    `};
    ${({ full }) => full && css`
        width: 100%;
        display: block;
    `};
`;

export default Button;
