import * as S from './style';

const Button = (props) => {
  return (
    <S.ButtonComponent onClick={props.onClick} type={props.type || 'button'}>
      {props.children}
    </S.ButtonComponent>
  );
};

export default Button;
