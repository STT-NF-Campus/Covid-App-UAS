import { Image, Paragraph } from "../ui";
import { SectionImage, SectionText, SectionTitle, StyledSectionAbout, Title } from "./SectionAbout.styled";

const SectionAbout = () => {
    return (
        <StyledSectionAbout>
            <SectionTitle>
                <Title type="display" color="primary">About</Title>
            </SectionTitle>
            <SectionImage>
                <Image src="/image_about.jpg" alt="Attack Covid"/>
            </SectionImage>
            <SectionText>
                <Paragraph type="h5" color="gray">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting  Lorem Ipsum has beenLorem Ipsum has been the industry's standard dummy text ever.`}</Paragraph>
            </SectionText>
        </StyledSectionAbout>
    )
}

export default SectionAbout;
