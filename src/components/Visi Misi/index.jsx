import { Image, Paragraph } from "../ui";
import { LeftSide, MisiContainer, RightSide, StyledVisiMisi, TextContainer, Title, TitleContainer, VisiContainer } from "./VisiMisi.styled";

const VisiMisi = () => {
    return (
        <StyledVisiMisi>
            <VisiContainer>
                <LeftSide>
                    <TitleContainer>
                        <Title type="display" color="primary">Visi</Title>
                    </TitleContainer>
                    <TextContainer>
                        <Paragraph type="h5" color="gray">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of.`}</Paragraph>
                    </TextContainer>
                </LeftSide>
                <RightSide>
                    <Image src="/public/undraw_world_re.svg" alt="Re-World" />
                </RightSide>
            </VisiContainer>
            <MisiContainer>
                <LeftSide>
                    <Image src="/public/undraw_stepping_up.svg" alt="Stepping Up" />
                </LeftSide>
                <RightSide>
                    <TitleContainer>
                        <Title type="display" color="primary">Misi</Title>
                    </TitleContainer>
                    <TextContainer>
                        <Paragraph type="h5" color="gray">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of.`}</Paragraph>
                    </TextContainer>
                </RightSide>
            </MisiContainer>
        </StyledVisiMisi>
    )
}


export default VisiMisi;