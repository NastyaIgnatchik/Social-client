import { createGlobalStyle } from 'styled-components';

import img from './assets/img/bg.jpg';
import pop from './assets/fonts/Poppins-Regular.ttf';

export const Global = createGlobalStyle`
*{
    font-family: 'Poppins';
}
body{
    background:#FFBEBD;
}
`;
export const Fontf = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
    src: url(${pop}) ;
  }
`;
