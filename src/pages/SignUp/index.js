import * as S from './style';
import { SignupForm, Description, TopNav } from 'components';

const SignUp = () => {
  return (
    <>
      <TopNav></TopNav>
      <S.Wrapper>
        <Description />
        <SignupForm />
      </S.Wrapper>
    </>
  );
};

export default SignUp;
