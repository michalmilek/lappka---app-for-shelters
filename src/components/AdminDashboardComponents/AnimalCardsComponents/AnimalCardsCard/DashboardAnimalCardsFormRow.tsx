import Typography from "components/SharedComponents/Typography/Typography";
import styled from "styled-components";

interface FormRowProps {
  label: string;
  children: React.ReactNode;
}

const FormRowContainer = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
`;

const HalfWidthField = styled.div`
  flex: 1;
`;

const FormRow = ({ label, children }: FormRowProps) => {
  return (
    <FormRowContainer>
      <HalfWidthField>
        <Typography
          variant="UI Small/UI Text 12 Reg"
          color="midGray1"
          tag="label">
          {label}
        </Typography>
      </HalfWidthField>
      <HalfWidthField>{children}</HalfWidthField>
    </FormRowContainer>
  );
};

export default FormRow;
