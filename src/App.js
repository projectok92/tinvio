import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';
import Button from './components/Button';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Button
          text='Get Started Now'
        />
       </Wrapper>
    </>
  );
}

export default App;
