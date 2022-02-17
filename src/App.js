import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';
// import Button from './components/Button';

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0);
  z-index: 10;
`;

const Logo = styled.img`
  width: 120px;
  height: 48px;
  margin-right: 14px;
  margin-left: 65px;
  object-fit: contain;
`;

const VerticalDevider = styled.div`
  width: 1px;
  height: 24px;
  margin-right: 24px;
  opacity: 0.2;
  background-color: #21272e;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  display: flex;
  margin-right: 24px;
`;

const NavA = styled.a`
  font-family: Manrope3;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #21272e;
  text-decoration: none;
  transition: ease;
  transition-duration: .4s;

  &:hover{
    color: #3897ff;
  }

  &:active{
    color: #3897ff;
  }
`;

const ButtonGetStarted = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 75px;
  width: 103px;
  height: 36px;
  border-radius: 6px;
  border: solid 1px rgba(144, 149, 153, 0.35);
  background-color: rgba(255, 255, 255, 0);

  transition: ease;
  transition-duration: .4s;

  &:hover{
    color: var(--white);
    background-color: #FA4352;
  }
`;
const NoiseBG = styled.div`
  position: absolute;
  width: 100%;
  background: url('/assets/img/Noise bg_green.jpg') repeat;
  height: 700px;
  z-index: -20;
`;

const BoxesAndFruitsBG = styled.div`
  max-width: 1280px;
  background: url('/assets/img/Boxes.png') no-repeat left -126px top 124px/403px,
              url('/assets/img/Fruits.png') no-repeat right -64px top 109px/330px;
  height: 700px;
  z-index: -10;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NoiseBG />
        <Container>
          <Header>
            <Nav>
              <a href='https://www.tinvio.com' title='Tinvio logo' target='_blank' rel="noreferrer">
                <Logo src='/assets/img/logo.png' alt='Tinvio logo' />
              </a>             
              <VerticalDevider />
              <NavUl>
                <NavLi>
                  <NavA href='#' title='Home'>Home</NavA>
                </NavLi>
                <NavLi>
                  <NavA href='#'title='Supplier' >Supplier</NavA>
                </NavLi>
                <NavLi>
                  <NavA href='#' title='About'>About</NavA>
                </NavLi>
                <NavLi>
                  <NavA href='#'title='Contact' >Contact</NavA>
                </NavLi>
              </NavUl>
            </Nav>
            <ButtonGetStarted>Get Started</ButtonGetStarted>
          </Header>
          <BoxesAndFruitsBG />

        </Container>



{/* 
        <Button
          text='Get Started Now'
        /> */}
       </Wrapper>
    </>
  );
}

export default App;
