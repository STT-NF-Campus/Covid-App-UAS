import { Card, Heading } from "../ui";
import { CardGroup, StyledIndonesiaSituation, TitleGroup } from "./IndonesiaSituation.styled";
import { useContext } from "react";
import IndonesiaContext from "../../context/IndonesiaContext";

const IndonesiaSituation = () => {
    const { data } = useContext(IndonesiaContext);
    return (
        <StyledIndonesiaSituation>
            <TitleGroup>
                <Heading type="display" color="primary">Indonesia Situation</Heading>
                <Heading type="h4" color="secondary">Data Covid Berdasarkan Indonesia</Heading>
            </TitleGroup>
            <CardGroup>
                {data.indonesia?.map((item, key) => 
                    <Card key={key}>
                        <Heading type="h2" color="black">
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Heading>
                        <Heading type="display" color={`${item.status === 'confirmed' ? "primary" : item.status === 'death' ? "danger" : "secondary"}`} >
                            {item.total.toLocaleString("id-ID")}
                        </Heading>
                    </Card>
                )}
                {/* {data.indonesia?.map((item) => (
                    <Card key="Indonesia Situation" value={item} />
                ))} */}
            </CardGroup>
        </StyledIndonesiaSituation>
    )
}

export default IndonesiaSituation;
