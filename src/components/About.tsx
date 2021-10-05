import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { CSSIcon } from '../icons/CSS';
import { GraphQL } from '../icons/GraphQL';
import { JavaScript } from '../icons/JavaScript';
import { NextJS } from '../icons/NextJS';
import { ReactIcon } from '../icons/ReactIcon';
import { TypeScript } from '../icons/TypeScript';
import theme from '../styles/theme';

const AboutSection = styled.section`
  margin-top: 50px;

  @media (max-width: 768px) {
    margin: 50px auto;
  }

  h2 {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    display: block;
    margin: auto;
  }
`;

const StyledText = styled.div`
  max-width: 500px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 10px 20px;
  }
`;

const StyledImg = styled.div`
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0 auto;
  }
`;

const TechText = styled.div`
  display: flex;
  align-items: center;
  svg {
    vertical-align: middle;
    height: 40px;
    width: 40px;
    padding-right: 5px;
  }

  color: ${theme.colors.grey};
  font-size: 12px;
  font-weight: 500;
  white-space: break-spaces;
`;

export const About = ({}) => {
  const usedTech = [
    { tech: 'JavaScript (ES6+)', icon: <JavaScript /> },
    { tech: 'TypeScript', icon: <TypeScript /> },
    { tech: 'React', icon: <ReactIcon /> },
    { tech: 'Next.js', icon: <NextJS /> },
    { tech: 'Styled Components', icon: <CSSIcon /> },
    { tech: 'GraphQL', icon: <GraphQL /> },
  ];

  return (
    <AboutSection>
      <h2>About Me</h2>
      <Container>
        <StyledText>
          <p>
            Hello! My name is Pavlos and I enjoy building user-friendly websites
            and web apps. I've always loved computers and technology but it
            wasn't until 2018 that I'd discover my passion for programming and
            web development when I started my studies.
          </p>
          <p>
            Currently, im finishing my studies in Lapland University of Appliend
            Sciences.
          </p>
          <p>Here are a few technologies I'm currently working with:</p>
          <ul>
            {usedTech.map(({ icon, tech }) => (
              <li key={tech}>
                <TechText>
                  {icon}
                  {tech}
                </TechText>
              </li>
            ))}
          </ul>
        </StyledText>
        <StyledImg>
          <StaticImage alt="Profile image" src="../images/icon.png" />
        </StyledImg>
      </Container>
    </AboutSection>
  );
};
