import { Card, Heading } from "../ui";
import { CardGroup, StyledIndonesiaSituation, SubTitle, Title, TitleGroup } from "./IndonesiaSituation.styled";
import { useContext } from "react";
import IndonesiaContext from "../../context/IndonesiaContext";

const IndonesiaSituation = () => {
    const { data } = useContext(IndonesiaContext);
    return (
        <StyledIndonesiaSituation>
            <TitleGroup>
                <Title type="display" color="primary">Indonesia Situation</Title>
                <SubTitle type="h4" color="secondary">Data Covid Berdasarkan Indonesia</SubTitle>
            </TitleGroup>
            <CardGroup>
                {data.indonesia?.map((item, key) => 
                    <Card key={key}>
                        <Heading type="h2" color="black">
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Heading>
                        <Heading type="h1" color={`${item.status === 'confirmed' ? "primary" : item.status === 'death' ? "danger" : "secondary"}`} >
                            {item.total.toLocaleString("id-ID")}
                        </Heading>
                    </Card>
                )}
            </CardGroup>
        </StyledIndonesiaSituation>
    )
}

export default IndonesiaSituation;
