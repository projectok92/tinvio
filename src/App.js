import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import SwiperCore, { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  margin-top: 6px;
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
  margin-right: 29px;
`;

const NavA = styled(NavLink)`
  font-family: Manrope3;
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #21272e;
  text-decoration: none;
  transition: ease;
  transition-duration: .4s;

  color: ${({ isBlue }) => isBlue ? '#3897ff' : '#21272e'};


  &:hover{
    color: #3897ff;
    transition: .4s;
  }

  &:active{
    color: #3897ff;
    transition: .4s;
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

  font-family: Manrope3;
  font-size: 11px;
  font-weight: 500;

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
  margin-bottom: 48px;
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
  margin-top: 18px;
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
  padding-bottom: 67px;
  max-width: 1280px;
  display: flex;
  justify-content: center;
`;

const DesctopImg = styled.img`
  position: relative;
  margin-top: -180px;
  height: 100%;
  max-width: 1055px;
`;

const PartnersSection = styled.section`
  position: relative;
  text-align: center;
  padding: 0 0 100px;
`;

const H3 = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: #21272e;
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
  height: 86px;
  max-width: fit-content;
  max-height: fit-content;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
`;

const SliderSection = styled.section`
  padding: 60px 0 74px;
  /* overflow-x: hidden; */
  position: relative;
`;

const SliderSectionContainer = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`;

const SliderSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
`;

const TextSliderBox = styled.div`
  width: 33%;
  align-self: flex-start;
  margin-top: 96px;
`;

const SliderSectionText = styled.div`

`;

const SliderTitle = styled.h3`
  width: 75%;
  line-height: 42px;
  font-size: 32px;
  font-weight: 700;
  color: #21272e;

`;

const SliderText = styled.p`
  padding: 27px 0 80px;
  letter-spacing: 0.1px;
  font-size: 18px;
  line-height: 1.67;
  font-weight: 600;
  font-style: normal;
  color: #787c80;
`;

const ImageSliderBox = styled.div`
  width: 970px;
  height: 591px;
  max-width: 999px;
  border-radius: 53px;
  background-color: #fcede8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -223px;
  top: 13px;
`;

const SliderImg = styled.img`
  height: 100%;
  overflow: hidden;
`;

const SwiperNavigation = styled.div`
  display: flex;
  width: 100%;
`;

const SwiperBullets = styled.div`
  margin: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-align: center;
  transition: opacity .3s;
  transform: translateZ(0);
  z-index: 10;
`;



function App() {

  SwiperCore.use([Navigation]);
  const swiperRef = React.useRef(null);
  const swiper = useSwiper();

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const [isActive, setIsActive] = useState(false);

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
              <Router>
                <NavUl>
                  <NavLi>
                    <NavA to="/" activeClassName="selected">
                      Home
                    </NavA>
                  </NavLi>

                  <NavLi>
                    <NavA to="/supplier" activeClassName="selected">
                      Supplier
                    </NavA>

                  </NavLi>
                  <NavLi>
                    <NavA to="/about" activeClassName="selected">
                      About
                    </NavA>                  
                  </NavLi>

                  <NavLi>
                    <NavA to="/contact" activeClassName="selected">
                      Contact
                    </NavA>
                  </NavLi>
                </NavUl>
              </Router>

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
                  <div>
                    <PartnersLogoItem src='/assets/img/GoChicken2.png' />
                  </div>
                  <div>
                    <PartnersLogoItem src='/assets/img/Jollibean2.png' />
                  </div>
                  <div>
                    <PartnersLogoItem src='/assets/img/BensCookies2.png' />
                  </div>
                  <div>
                    <PartnersLogoItem src='/assets/img/SimplyWrapps2.png' />
                  </div>
                  <div>
                    <PartnersLogoItem src='/assets/img/TheItalianClub.png' />
                  </div>
                </PartnersLogos>
              </PartnersContainer>
            </PartnersSection>
            <SliderSection>
              <SliderSectionContainer>
                <SliderSectionContent>
                  <TextSliderBox>

                    <Swiper
                      className='mySwiper1'
                      modules={[Navigation, Pagination, Keyboard, Mousewheel, Controller]}
                      onSwiper={setFirstSwiper}
                      controller={{ control: secondSwiper }}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      keyboard={{
                        enabled: true,
                      }}
                      mousewheel={true}
                      rewind={true}
                    >
                      <SwiperSlide>
                        <SliderSectionText>
                          <SliderTitle>
                            All your orders in one place
                          </SliderTitle>
                          <SliderText>
                            Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform
                          </SliderText>
                        </SliderSectionText>
                      </SwiperSlide>
                      <SwiperSlide>
                        <SliderSectionText>
                          <SliderTitle>
                            Payment Details
                          </SliderTitle>
                          <SliderText>
                            Say no more to chunky emails
                          </SliderText>
                        </SliderSectionText>
                      </SwiperSlide>
                      <SwiperSlide>
                        <SliderSectionText>
                          <SliderTitle>
                            Analytics
                          </SliderTitle>
                          <SliderText>
                            Some description
                          </SliderText>
                        </SliderSectionText>
                      </SwiperSlide>
                    </Swiper>
                    <SwiperNavigation>
                      <button onClick={() => swiper.slidePrev()}>Slide to the previous slide</button>
                        <Swiper
                          pagination
                        >
                        </Swiper>
                      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
                    </SwiperNavigation>

                    


                    {/* <div
                      id="previousButton"
                      className='previousSwiperButton'
                      onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                      <img src='/assets/img/Chevron.svg' alt='previous'/>
                    </div>
                    <div
                      className='nextSwiperButton'
                      id="nextButton"
                      onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                      <img src='/assets/img/Chevron.svg' alt='next'/>
                    </div> */}
                  </TextSliderBox>
  
                  <ImageSliderBox>
                    <Swiper
                      className='mySwiper2'
                      modules={[Navigation, Pagination, Keyboard, Mousewheel, Controller]}
                      onSwiper={setSecondSwiper}
                      controller={{ control: firstSwiper }}
                      spaceBetween={200}
                      slidesPerView={1}
                      keyboard={{
                        enabled: true,
                      }}
                      mousewheel={true}
                      rewind={true}
                    >
                      <SwiperSlide>
                        <SliderImg
                          className='slider-img-1'
                          src='/assets/img/Orders.png'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <SliderImg
                          className='slider-img-1'
                          src='/assets/img/OperationalCosts.png'
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <SliderImg
                          className='slider-img-3'
                          src='/assets/img/Analytics.png'
                        />
                      </SwiperSlide>
                    </Swiper>

                  </ImageSliderBox>
                </SliderSectionContent>
              </SliderSectionContainer>
            </SliderSection>


          </Main>


        </Container>





       </Wrapper>
    </>
  );
}

export default App;
