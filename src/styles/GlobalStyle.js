import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body,
  html {
  font-size: 70%;
  box-sizing: border-box;
}

:root {
  --blue: rgb(10, 149, 255);
  --gray: hsl(210, 8%, 45%);
}
`;
