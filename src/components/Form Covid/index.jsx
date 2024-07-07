import { Form, Image } from '../ui';
import { FormItem, FormLeft, FormRight, StyledFormCovid, Title } from './FormCovid.styled';

const FormCovid = () => {
  return (
    <StyledFormCovid>
      <FormLeft>
        <Image src="/undraw_conceptual_idea_xw7k.svg" alt="image.svg"/>
      </FormLeft>
      <FormRight>
        <FormItem>
          <Title type="display" color="primary">Form Covid</Title>
        </FormItem>
        <FormItem>
          <Form/>
        </FormItem>
      </FormRight>
    </StyledFormCovid>
  )
}

export default FormCovid;