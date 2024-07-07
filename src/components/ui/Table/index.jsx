import { Body, Data, Head, Title, Row, StyledTable } from "./Table.styled"

const Table = ({ data }) => {
    const sortedData = data.regions?.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <StyledTable>
            <Head>
                <Row>
                    <Title>No</Title>
                    <Title>Provinsi</Title>
                    <Title>Positif</Title>
                    <Title>Sembuh</Title>
                    <Title>Dirawat</Title>
                    <Title>Meninggal</Title>
                </Row>
            </Head>
            <Body>
                {sortedData?.map((item, key) => {
                    const { name, numbers: { confirmed, recovered, treatment, death } } = item;
                    return(
                    <Row key={key}>
                        <Data>{key + 1}</Data>
                        <Data>{name}</Data>
                        <Data>{confirmed}</Data>
                        <Data>{recovered}</Data>
                        <Data>{treatment}</Data>
                        <Data>{death}</Data>
                    </Row>
                )})}
            </Body>
        </StyledTable>
    )
}

export default Table;
