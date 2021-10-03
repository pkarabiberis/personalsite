import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const First = styled.h1`
  color: ${theme.colors.purple};
  font-size: ${theme.fontSizes.base};
  line-height: 18px;
  font-weight: 600;
  margin-left: 4px;
`;

const Second = styled.h2`
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  line-height: 88px;
  margin: 0;
`;

const Third = styled.p`
  margin-top: 20px;
  max-width: 500px;
  color: ${theme.colors.grey};
`;

export const Hero = () => {
  return (
    <HeroSection>
      <First>Hi, my name is</First>
      <Second>Pavlos Karabiberis</Second>
      <Third>
        I'm a software engineer lorem lorem I'm a software engineer lorem lorem
        I'm a software engineer lorem lorem I'm a software engineer lorem lorem
        I'm a software engineer lorem lorem I'm a software engineer lorem lorem
      </Third>
    </HeroSection>
  );
};
