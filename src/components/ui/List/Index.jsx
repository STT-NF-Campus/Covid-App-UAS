import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    display:flex;
    color: white;
    text-align: center;

    .list{
        padding-left: 2.5rem;
        font-size: 1.563rem;
        list-style-type: none;
        font-size: ${({ theme }) => theme.fontsize.h5};
        transition: all 0.3s ease-in-out;
        @media (min-width: 768px) {
            font-size: ${({ theme }) => theme.fontsize.h4};
        }
        &:hover{
            transform: scale(1.1);
        }
    }

    ${({ click }) => click == "true" && css`
        .list{
            margin: 0.5rem 0;
            padding-left: 0;
        }
        flex-direction: column;
        text-align: left;
    `}

    a{
        text-decoration: none;
        color: white;
    }
`;

const List = ({ click }) => {
    return (
        <Ul click={click}>
            <li className="list">
                <Link to="/">Global</Link>
            </li>
            <li className="list">
                <Link to="/indonesia">Indonesia</Link>
            </li>
            <li className="list">
                <Link to="/provinsi">Provinsi</Link>
            </li>
            <li className="list">
                <Link to="/about">About</Link>
            </li>
        </Ul>
    )
}

export default List;
