import { useContext } from "react";
import { Table } from "../ui";
import { StyledSituationProvinces, CardGroup, TitleGroup, Title, SubTitle } from "./SituationProvinces.styled";
import IndonesianContext from "../../context/IndonesiaContext";

const SituationProvinces = () => {
    const { data } = useContext(IndonesianContext);
    return (
        <StyledSituationProvinces>
            <TitleGroup>
                <Title type="display" color="primary">Situation by Provinces</Title>
                <SubTitle type="h4" color="secondary">Data Covid Berdasarkan Provinsi</SubTitle>
            </TitleGroup>
            <CardGroup>
                <Table data={data} />
            </CardGroup>
        </StyledSituationProvinces>
    )
}

export default SituationProvinces;
