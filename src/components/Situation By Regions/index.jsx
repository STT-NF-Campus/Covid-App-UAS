import { useContext } from "react";
import { Card, Heading } from "../ui";
import { CardGroup, StyledIcon, StyledSituationRegions, SubTitle, Title, TitleCard, TitleGroup, ValueCard } from "./SituationRegions.styled";
import { FaHeadSideMask, FaFaceLaughBeam, FaSkull } from "react-icons/fa6";
import GlobalContext from "../../context/GlobalContext";

const SituationRegions = () => {
    const { data } = useContext(GlobalContext);
    return (
        <StyledSituationRegions>
            <TitleGroup>
                <Title type="display" color="primary">Situation by Regions</Title>
                <SubTitle type="h4" color="secondary">Bacaan Pilihan Covid</SubTitle>
            </TitleGroup>
            <CardGroup>
                {data.regions?.map((value, key) => {
                    const { name, numbers: { confirmed, recovered, death } } = value;
                    let newName;
                    if (name === "Western Pacific") {
                        newName = "Western";
                    } else if (name === "South-East Asia") {
                        newName = "Asia";
                    } else if (name === "Eastern Mediterranean") {
                        newName = "Eastern";
                    }
                    return (
                        <Card key={key}>
                            <Heading type="h2" color="black">{newName || name}</Heading>
                            <ValueCard>
                                <TitleCard>
                                    <Heading type="paragraph" color="gray">Confirmed</Heading>
                                    <Heading type="h4" color="primary">{confirmed.toLocaleString("ID")}</Heading>
                                </TitleCard>
                                <StyledIcon color="primary">
                                    <FaHeadSideMask />
                                </StyledIcon>
                            </ValueCard>
                            <ValueCard>
                                <TitleCard>
                                    <Heading type="paragraph" color="gray">Recovered</Heading>
                                    <Heading type="h4" color="secondary">{recovered.toLocaleString("ID")}</Heading>
                                </TitleCard>
                                <StyledIcon color="secondary">
                                    <FaFaceLaughBeam />
                                </StyledIcon>
                            </ValueCard>
                            <ValueCard>
                                <TitleCard>
                                    <Heading type="paragraph" color="gray">Death</Heading>
                                    <Heading type="h4" color="danger">{death.toLocaleString("ID")}</Heading>
                                </TitleCard>
                                <StyledIcon color="danger">
                                    <FaSkull />
                                </StyledIcon>
                            </ValueCard>
                        </Card>
                    );
                })}
            </CardGroup>
        </StyledSituationRegions>
    )
}

export default SituationRegions;
