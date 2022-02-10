import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import AppleColorEmoji from './accets/fonts/Apple Color Emoji.woff';
import AppleColorEmoji2 from './accets/fonts/Apple Color Emoji.woff2';
import HandOfSeanRegular from './accets/fonts/HandOfSeanRegular.woff';
import HandOfSeanRegular2 from './accets/fonts/HandOfSeanRegular.woff2';
import ManropeMedium from './accets/fonts/Manropemedium.woff';
import ManropeMedium2 from './accets/fonts/Manropemedium.woff2';
import ManropeSemibold from './accets/fonts/Manropesemibold.woff';
import ManropeSemibold2 from './accets/fonts/Manropesemibold.woff2';
import ManropeBold from './accets/fonts/Manropebold.woff';
import ManropeBold2 from './accets/fonts/Manropebold.woff2';
import ManropeExtraBold from './accets/fonts/Manrope-ExtraBold.woff';
import ManropeExtraBold2 from './accets/fonts/Manrope-ExtraBold.woff2';

import RedButton from './components/RedButton';

const Global = createGlobalStyle`
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
    src: url(${AppleColorEmoji}) format('woff'),
         url(${AppleColorEmoji2}) format('woff2');
  }

  @font-face {
    font-family: 'Hand Of Sean';
    font-weight: 400;
    src: url(${HandOfSeanRegular}) format('woff'),
         url(${HandOfSeanRegular2}) format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 500;
    src: url(${ManropeMedium}) format('woff'),
         url(${ManropeMedium2}) format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 600;
    src: url(${ManropeSemibold}) format('woff'),
         url(${ManropeSemibold2}) format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 700;
    src: url(${ManropeBold}) format('woff'),
         url(${ManropeBold2}) format('woff2');
  }

  @font-face {
    font-family: 'Manrope3';
    font-weight: 800;
    src: url(${ManropeExtraBold}) format('woff'),
         url(${ManropeExtraBold2}) format('woff2');
  }

`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;


function App() {
  return (
    <>
      <Global />
      <Wrapper>
        <RedButton>
          {"Get Started Now"}
        </RedButton>
       </Wrapper>
    </>
  );
}

export default App;
