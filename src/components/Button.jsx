import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({text, isTabButton, isActive}) => {
  return (
    <RedButton isTab={isTabButton} isActive={isActive}>
      {text}
    </RedButton>
  );
};

const RedButton = styled.button`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 214px;
  height: 52px;

  border: none;
  border-radius: 8px;
  background-image: linear-gradient(104deg, #ff474d, #fa4353);
  box-shadow: 0 15px 18px -12px rgb(0 0 0 / 50%);
  
  color: var(--white);
  font-family: "Manrope3";
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  transition: ease;
  transition-duration: .4s;

  cursor: pointer;

  &:hover {
    top: -5px;
  }

  ${({isTab, isActive}) => isTab && css`
    width: 128px;
    height: 48px;
    font-weight: 700;
    outline: none;
    color: #787c80;
    border-radius: 6px;
    border: 1px solid rgba(144,149,153,.35);
    transition: .4s;

    white-space: nowrap;
    cursor: pointer;
    

    &:first-child {
      margin-right: 24px;
    }

    ${(isActive) => isActive && css`
      color: #fa4353;
      box-shadow: 0 3px 5px 0 rgb(0 0 0 / 11%);
      background-color: #fff;
    `}

  `};
`;

export default Button;
