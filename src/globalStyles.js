import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;
  }

  @font-face {
    font-family: 'Apple Color Emoji';
    font-weight: 400;
    src: url('/assets/fonts/Apple Color Emoji.woff') format('woff'),
         url('/assets/fonts/Apple Color Emoji.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Hand Of Sean';
    font-weight: 400;
    src: url('/assets/fonts/HandOfSeanRegular.woff') format('woff'),
         url('/assets/fonts/HandOfSeanRegular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 500;
    src: url('/assets/fonts/Manropemedium.woff') format('woff'),
         url('/assets/fonts/Manropemedium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 600;
    src: url('/assets/fonts/Manropesemibold.woff') format('woff'),
         url('/assets/fonts/Manropesemibold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 700;
    src: url('/assets/fonts/Manropebold.woff') format('woff'),
         url('/assets/fonts/Manropebold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 800;
    src: url('/assets/fonts/Manrope-ExtraBold.woff') format('woff'),
         url('/assets/fonts/Manrope-ExtraBold.woff2') format('woff2');
  }

`;
 
export default GlobalStyle;