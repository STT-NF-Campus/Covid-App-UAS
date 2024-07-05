import StyledImage from "./Image.styled";

const Image = ({src, alt}) => {
    return (
        <StyledImage src={src} alt={alt} />
    )
}

export default Image;