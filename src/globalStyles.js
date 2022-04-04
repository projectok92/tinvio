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

  body {
    font-family: Manrope3,sans-serif;
    -webkit-font-smoothing: antialiased;
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

  .slider-img-1 {
    position: relative;
    width: 109%;
    height: 109%;
    object-fit: contain;
    top: 26px;
    left: -13px;
  }

  .slider-img-3 {
    position: relative;
    width: 96%;
    height: 96%;
    object-fit: contain;
    top: 12px;
    left: 45px;
  }


  .nextSwiperButton,
  .swiper-button-next {
    width: 48px;
    height: 48px;
    border: 1px solid #dae1e8;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    transition: all .3s;

    background-image: url(/assets/img/Chevron.svg);
    background-repeat: no-repeat;
    background-size: 24px auto;
    background-position: center;

    &::after {
      display: none;
    }

    &:hover {
      background-color: #f0f1f2;
      transition: all .3s;
    }

  }

  .swiper-button-prev,
  .previousSwiperButton {
    width: 48px;
    height: 48px;
    border: 1px solid #dae1e8;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    transition: all .3s;

    background-image: url(/assets/img/Chevron.svg);
    background-repeat: no-repeat;
    background-size: 24px auto;
    background-position: center;
    transform: rotate(180deg);

    &:hover {
      background-color: #f0f1f2;
      transition: all .3s;
    }

    &::after {
      display: none;
    }

  }

  .swiper-button-disabled {

  }


  .swiper-pagination {
    width: 187px;
    margin: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: relative; */
    transform: translateZ(0);
    z-index: 2;
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }

  .swiper-pagination-bullet {
    display: inline-block;
    border-radius: 100%;
    width: 6px;
    height: 6px;
    background-color: rgba(33,39,46,.65);
    background: #000;
    opacity: .2;

    &:active {
      opacity: 1;
      background: var(--swiper-theme-color);
      background: var(--swiper-pagination-color,var(--swiper-theme-color));
    }
  }

  .active {
    color: #3897ff;
  }

  

`;

 
export default GlobalStyle;
