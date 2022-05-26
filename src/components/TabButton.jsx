import React from 'react';
import styled, { css } from 'styled-components';

const TabButton = ({text, isActive, clickHandler}) => {
  return (
    <RedButton
      isActive={isActive}
      onClick={clickHandler}
    >
      {text}
    </RedButton>
  );
};

const RedButton = styled.button`

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
  
  ${({isActive}) => isActive && css`
    color: #fa4353;
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 11%);
    background-color: #fff;
  `};
`;

export default TabButton;
