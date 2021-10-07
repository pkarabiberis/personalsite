import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../icons/ExternalLink';
import { Github } from '../icons/Github';
import theme from '../styles/theme';

interface Placement {
  left?: boolean;
}

const ProjectSection = styled.section`
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ProjectContainer = styled.div<Placement>`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-direction: ${({ left }) => left && 'column-reverse'};
    margin-bottom: 50px;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  width: 100%;
  transition-duration: 0.3s;
  height: fit-content;
  border: 1px solid #e6e6e6;
  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectDescription = styled.div<Placement>`
  width: 30%;
  margin-left: ${({ left }) => (!left ? '25px' : 0)};
  margin-right: ${({ left }) => (left ? '25px' : 0)};
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    font-weight: 600;
    font-size: ${theme.fontSizes.base};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }

  li {
    font-size: 12px;
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto 0 auto;

    ul {
      margin: auto;
      width: fit-content;
      justify-items: center;
    }
  }
`;

const Icon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;

    a {
      text-decoration: none;
    }
  }
`;

export const Projects = () => {
  return (
    <ProjectSection>
      <h2>Things I've Built</h2>
      <ProjectContainer>
        <ProjectImage>
          <StaticImage
            alt="My Spotify project image"
            src="../images/spotify.png"
            quality={100}
          />
        </ProjectImage>
        <ProjectDescription left={false}>
          <h1>
            <a
              href="https://my-spotify.karabiberisapps.com"
              target="_blank"
              rel="noreferrer"
              className="project-link text-link"
            >
              My Spotify
            </a>
            <div>
              <Icon className="icon-link">
                <a
                  href="https://github.com/pkarabiberis/my-spotify-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </Icon>
              <Icon className="icon-link">
                <a
                  href="https://my-spotify.karabiberisapps.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </Icon>
            </div>
          </h1>
          <p>
            A web application that shows your Spotify data. Includes top
            artists, top tracks, recently played tracks, playlists and detailed
            information about each track.
          </p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Spotify API</li>
            <li>Express</li>
            <li>Docker</li>
            <li>Styled Components</li>
          </ul>
        </ProjectDescription>
      </ProjectContainer>
      <ProjectContainer left>
        <ProjectDescription left>
          <h1>
            <a
              href="https://issuetracker.karabiberisapps.com"
              target="_blank"
              rel="noreferrer"
              className="project-link text-link"
            >
              Issuetracker
            </a>
            <div>
              <Icon className="icon-link">
                <a
                  href="https://github.com/pkarabiberis/issuetracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </Icon>
              <Icon className="icon-link">
                <a
                  href="https://issuetracker.karabiberisapps.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                </a>
              </Icon>
            </div>
          </h1>
          <p>
            An issue tracker application where users can make projects and
            issues.
          </p>
          <ul>
            <li>React</li>
            <li>Chakra UI</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>PostgreSQL</li>
            <li>Next.js</li>
            <li>Redis</li>
            <li>TypeORM</li>
            <li>TypeGraphQL</li>
            <li>Docker</li>
          </ul>
        </ProjectDescription>
        <ProjectImage>
          <StaticImage
            alt="Issuetracker project image"
            src="../images/issuetracker.png"
            quality={100}
          />
        </ProjectImage>
      </ProjectContainer>
    </ProjectSection>
  );
};
