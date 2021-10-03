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
      <AboutMe>About Me</AboutMe>
      <InfoText>
        Hello! My name is Pavlos and i enjoy building user-friendly websites and
        web apps. I've always loved computers and technology but it wasn't until
        2018 that i'd discover my passion for programming and web development
        when i started my studies.
      </InfoText>
      <InfoText>
        Currently, im finishing my studies in Lapland University of Appliend
        Sciences.
      </InfoText>
      <InfoText>
        Here are a few technologies I'm currently working with:
      </InfoText>
    </AboutSection>
  );
};
