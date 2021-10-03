import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const AboutSection = styled.section`
  margin-top: 50px;
`;

const AboutMe = styled.h2`
  font-weight: 600;
  font-size: ${theme.fontSizes.md};
`;

const Container = styled.div`
  display: flex;
`;

const InfoText = styled.p`
  max-width: 500px;
  color: ${theme.colors.grey};
`;

export const About = ({}) => {
  return (
    <AboutSection>
      <AboutMe>About me</AboutMe>
      <Container>
        <InfoText>
          I'm a software engineer lorem lorem I'm a software engineer lorem
          lorem I'm a software engineer lorem lorem I'm a software engineer
          lorem lorem I'm a software engineer lorem lorem I'm a software
          engineer lorem lorem
        </InfoText>
        <InfoText>
          I'm a software engineer lorem lorem I'm a software engineer lorem
          lorem I'm a software engineer lorem lorem I'm a software engineer
          lorem lorem I'm a software engineer lorem lorem I'm a software
          engineer lorem lorem
        </InfoText>
      </Container>
    </AboutSection>
  );
};
