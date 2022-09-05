import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';

import * as S from './style';

import Button from 'components/Button';

const Backdrop = (props) => {
  return <S.Backwall>배경</S.Backwall>;
};

const ModalOverlay = (props) => {
  const navigate = useNavigate();

  const directToHome = () => {
    navigate('/');
  };
  return (
    <S.Modal>
      <header>
        <h2>Upload Success !</h2>
      </header>
      <footer>
        <Button onClick={directToHome}>Go to main page</Button>
      </footer>
    </S.Modal>
  );
};

const SuccessModal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default SuccessModal;
