import { Card, Button } from 'components';
import * as S from './style';

const LoginForm = () => {
  return (
    <Card>
      <S.Form>
        <S.Label>Email</S.Label>
        <S.Input></S.Input>
        <S.Label>Password</S.Label>
        <S.Input></S.Input>
        <Button>Log in</Button>
      </S.Form>
    </Card>
  );
};

export default LoginForm;
