import styled from "styled-components";

const Div = styled.div`

    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

`;

const Container = ({children}) => {
    return (
        <Div>{children}</Div>
    )
}

export default Container;
