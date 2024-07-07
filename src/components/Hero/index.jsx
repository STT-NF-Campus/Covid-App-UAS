import { Button, Paragraph} from "../ui";
import { ButtonGroup, DecriptionGroup, HeroImage, HeroLeft, HeroRight, StyledHero, SubTitle, Title, TitleGroup } from "./Hero.styled";

const Hero = () => {
    return (
        <StyledHero>
            <HeroLeft>
                <TitleGroup>
                    <Title type="display" color="primary">Covid ID</Title>
                    <SubTitle type="h4" color="secondary">Monitoring Perkembangan Covid</SubTitle>
                </TitleGroup>
                <DecriptionGroup>
                    <Paragraph type="h4" color="gray">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}</Paragraph>
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
