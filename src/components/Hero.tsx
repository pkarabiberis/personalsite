import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const First = styled.h1`
  color: ${theme.colors.purple};
  font-size: clamp(14px, 5vw, 16px);
  line-height: 18px;
  font-weight: 600;
  margin-left: 4px;
`;

const Second = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  line-height: 66px;
  margin: 0;
`;

const Third = styled.h2`
  margin-top: 20px;
  font-size: clamp(20px, 4vw, 30px);
  font-weight: 400;
  line-height: 0.9;
  margin: 10px 0 0 4px;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <First>Hi, my name is</First>
      <Second>Pavlos Karabiberis.</Second>
      <Third>I'm a full-stack developer.</Third>
    </HeroSection>
  );
};
