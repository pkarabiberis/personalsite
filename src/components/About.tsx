import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { CSSIcon } from '../icons/CSS';
import { GraphQL } from '../icons/GraphQL';
import { JavaScript } from '../icons/JavaScript';
import { NextJS } from '../icons/NextJS';
import { ReactIcon } from '../icons/ReactIcon';
import { TypeScript } from '../icons/TypeScript';

const AboutSection = styled.section`
  padding: 40px 0;

  @media (max-width: 768px) {
    margin: auto;
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
  p {
    margin-top: 0;
  }

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
            wasn't until 2018 that I would discover my passion for programming
            and web development when I started my studies.
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
          <StaticImage
            alt="Profile image"
            src="https://media.istockphoto.com/photos/pedestal-or-product-podium-mockup-isolated-from-teal-colored-picture-id1266423763?b=1&k=20&m=1266423763&s=170667a&w=0&h=wQ8biqEZcAYtf7IPzg4QD8SVAMY010tuBQggaAKDwXE="
          />
        </StyledImg>
      </Container>
    </AboutSection>
  );
};
