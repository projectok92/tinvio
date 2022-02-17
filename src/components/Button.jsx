import React from 'react';
import styled from 'styled-components';

const Button = ({text}) => {
  return (
    <RedButton>
      {text}
    </RedButton>
  );
};

const RedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 214px;
  height: 52px;

  border: none;
  border-radius: 8px;
  background-image: linear-gradient(104deg, #ff474d, #fa4353);
  
  color: var(--white);
  font-family: "Manrope3";
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
`;

export default Button;