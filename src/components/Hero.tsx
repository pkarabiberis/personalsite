import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const First = styled.p`
  color: ${theme.colors.darkGrey};
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 300;
  margin-left: 4px;
  line-height: 24px;
`;

const Second = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  color: ${theme.colors.darkGrey};
  font-weight: 700;
  line-height: 48px;
  margin: 0;
`;

const Third = styled.h2`
  margin-top: 20px;
  font-size: clamp(20px, 4vw, 30px);
  color: ${theme.colors.teal};
  font-weight: 700;
  margin-top: 10px;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <First>Hi, my name is</First>
      <Second>Pavlos Karabiberis.</Second>
      <Third>Software Engineer and student</Third>
    </HeroSection>
  );
};
