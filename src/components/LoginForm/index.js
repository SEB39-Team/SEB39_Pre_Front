import styled from 'styled-components';
import { Card, Button } from 'components';

const Form = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  flex: 1;
  color: rgb(35, 38, 41);
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: block;
  flex: 3;
  font-size: 1.5rem;
  padding: 7px 9px;
  border-radius: 3px;
  border: 1px solid rgb(186, 191, 196);
  margin-bottom: 15px;

  &:focus {
    outline: 3px solid rgba(10, 149, 255, 0.2);
  }
`;

const LoginForm = () => {
  return (
    <Card>
      <Form>
        <Label>Email</Label>
        <Input></Input>
        <Label>Password</Label>
        <Input></Input>
        <Button>Log in</Button>
      </Form>
    </Card>
  );
};

export default LoginForm;
