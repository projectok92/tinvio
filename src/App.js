import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './globalStyles';
import Button from './components/Button';

const DotsBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/assets/img/dots1.png') no-repeat right 93px top 5px/600px,
              url('/assets/img/dots2.png') no-repeat right 100px top 802px/961px,
              url('/assets/img/dots3.png') no-repeat left 319px bottom 998px/710px,
              url('/assets/img/dots4.png') no-repeat left 323px bottom 151px/370px;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

const Header = styled.div`
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

  cursor: pointer;

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

const Main = styled.main`
`;

const TopSection = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
  padding-top: 117px;
  text-align: center;
  /* background: url('/assets/img/Boxes.png') no-repeat left -126px top 124px/403px,
              url('/assets/img/Fruits.png') no-repeat right -64px top 109px/330px; */
  height: 700px;
`;

const ImgLeftBG = styled.img`
  position: absolute;
  left: -127px;
  top: 40px;
  width: 404px;

`;

const ImgRigthtBG = styled.img`
  position: absolute;
  right: -60px;
  top: 27px;
  width: 325px;

`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const H2 = styled.h2`
  font-size: 13px;
  font-family: Manrope3;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
  color: #f43939;
  text-transform: uppercase;
`;

const H1 = styled.h1`
  margin-top: 16px;
  margin-bottom: 56px;
  font-family: Manrope3;
  font-size: 40px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #21272e;
`;

const SmallDescript = styled.p`
  margin-top: 16px;
  font-family: Manrope3;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #909599;

  &::after {
    font-family: 'Apple Color Emoji';
    content: '🎉';
  }
`;

const DemoScreenSection = styled.section`
  position: relative;
  margin: 0 auto;
  padding-bottom: 52px;
  max-width: 1280px;
  display: flex;
  justify-content: center;
`;

const DesctopImg = styled.img`
  position: relative;
  margin-top: -175px;
  height: 100%;
  max-width: 1055px;
`;

const PartnersSection = styled.section`
  position: relative;
  text-align: center;
  padding: 0 0 52px;
`;

const H3 = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: #21272e;
  letter-spacing: .5px;
`;

const PartnersContainer = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`;

const PartnersLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 984px;
  padding: 0;
  margin: 70px auto 0;
`;

const PartnersLogoItem = styled.img`
  width: 138px;
  height: fit-content;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <DotsBG />
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

          <Main>
            <TopSection>
              <ImgLeftBG
                src='/assets/img/Boxes.png'
              />
              <ImgRigthtBG
                src='/assets/img/Fruits.png'
              />
              <ContentContainer>
                <H2>For a smarter supply chain</H2>
                <H1>
                  Take your business to the next level <br/>
                  with Tinvio’s Supplier Platform
                </H1>
                <Button
                  text='Get Started Now'
                />
                <SmallDescript>
                  {'Yes, it’s free '}
                </SmallDescript>
               </ContentContainer>
            </TopSection>

            <DemoScreenSection>
              <DesctopImg
                src='/assets/img/desktop.png'
              />
            </DemoScreenSection>

            <PartnersSection>
              <H3>
                Trusted by 1000+ partners across APAC
              </H3>
              <PartnersContainer>
                <PartnersLogos>
                  <PartnersLogoItem
                    src='/assets/img/GoChicken.png'
                  />
                  <PartnersLogoItem
                    src='/assets/img/Jollibean.png'
                  />
                  <PartnersLogoItem
                    src='/assets/img/BensCookies.png'
                  />
                  <PartnersLogoItem
                    src='/assets/img/SimplyWrapps.png'
                  />
                  <PartnersLogoItem
                    src='/assets/img/TheItalianClub.png'
                  />
                </PartnersLogos>
              </PartnersContainer>
            </PartnersSection>


          </Main>


        </Container>





       </Wrapper>
    </>
  );
}

export default App;
