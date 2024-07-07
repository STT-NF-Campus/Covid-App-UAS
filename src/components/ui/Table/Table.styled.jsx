import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1.5px solid ${({ theme }) => theme.colors.gray};
`;

const Head = styled.thead`
    border: 1.5px solid ${({ theme }) => theme.colors.gray};
`;

const Title = styled.th`
    border: 1.5px solid ${({ theme }) => theme.colors.gray};
    padding: 0.5rem 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};  
    @media (min-width: 768px) {
        padding: 0.7rem 1.75rem;
    }
`;

const Body = styled.tbody``;

const Row = styled.tr`
    text-align: center;
`;

const Data = styled.td`
    border: 1.5px solid gray;
    padding: 0.5rem 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    border: 1.5px solid ${({ theme }) => theme.colors.gray};
    @media (min-width: 768px) {
        padding: 0.7rem 1.75rem;
    }
`;


export { StyledTable, Head, Title, Body, Row, Data };