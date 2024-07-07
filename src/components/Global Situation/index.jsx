import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { Card, Heading } from "../ui";
import { StyledGlobalSituation, CardGroup, TitleGroup, Title, SubTitle } from "./GlobalSituation.styled";

const GlobalSituation = () => {
    const { data } = useContext(GlobalContext);
    return (
        <StyledGlobalSituation>
            <TitleGroup>
                <Title type="display" color="primary">Global Situation</Title>
                <SubTitle type="h4" color="secondary">Data Covid Berdasarkan Global</SubTitle>
            </TitleGroup>
            <CardGroup>
                {data.global?.map((value, key=1) =>
                    <Card key={key++}>
                        <Heading type="h2" color="black">
                            {value.status.charAt(0).toUpperCase() + value.status.slice(1)}
                        </Heading>
                        <Heading type="display" color={`${value.status === 'confirmed' ? "primary" : value.status === 'death' ? "danger" : "secondary"}`} >
                            {value.total.toLocaleString().slice(null, -8) + " Juta"}
                        </Heading>
                    </Card>
                )}
            </CardGroup>
        </StyledGlobalSituation>
    )
}

export default GlobalSituation;
