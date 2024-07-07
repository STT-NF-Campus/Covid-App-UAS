import { useContext } from "react";
import { Table } from '../ui';
import { CardGroup, StyledProvinsiTable, SubTitle, Title, TitleGroup } from './ProvinsiTable.styled';
import ProvinsiContext from "../../context/ProvinsiContext";

const ProvinsiTable = () => {
    const { data } = useContext(ProvinsiContext);
    return (
        <StyledProvinsiTable>
            <TitleGroup>
                <Title type="display" color="primary">Provinsi</Title>
                <SubTitle type="h4" color="secondary">Data Covid Berdasarkan Provinsi</SubTitle>
            </TitleGroup>
            <CardGroup>
                <Table data={data}/>
            </CardGroup>
        </StyledProvinsiTable>
    )
}

export default ProvinsiTable;