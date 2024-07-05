import { Button, Heading} from "../ui";
import { ButtonGroup, DecriptionGroup, HeroImage, HeroLeft, HeroRight, StyledHero, TitleGroup } from "./Hero.styled";

const Hero = () => {
    return (
        <StyledHero>
            <HeroLeft>
                <TitleGroup>
                    <Heading type="display" color="primary">Covid ID</Heading>
                    <Heading type="h4" color="secondary">Monitoring Perkembangan Covid</Heading>
                </TitleGroup>
                <DecriptionGroup>
                    <Heading type="h4" color="gray">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}</Heading>
                </DecriptionGroup>
                <ButtonGroup>
                    <Button size="md">Vaccine</Button>
                </ButtonGroup>
            </HeroLeft>
            <HeroRight>
                <HeroImage src="/undraw_medical_care_movn.svg" alt="Medical Care"/>
            </HeroRight>
        </StyledHero>
    )
}

export default Hero;
