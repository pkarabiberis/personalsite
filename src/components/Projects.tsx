import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../icons/ExternalLink';
import { Github } from '../icons/Github';
import theme from '../styles/theme';

const ProjectSection = styled.section`
  margin-top: 50px;

  h2 {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 4px;
  transition-duration: 0.3s;
  border: 1px solid #e6e6e6;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectDescription = styled.div`
  width: 30%;
  margin-left: 25px;
  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    font-weight: 600;
    font-size: ${theme.fontSizes.base};
  }

  li {
    margin-bottom: 10px;
    &:before {
      content: 'o';
      color: ${theme.colors.purple};
      margin-right: 5px;
    }

    @media (max-width: 768px) {
      ul {
        display: flex;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }
`;

const Icon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;

    &:hover {
      stroke: ${theme.colors.purple};
    }

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
        <ProjectDescription>
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
              <Icon>
                <a
                  href="https://github.com/pkarabiberis/my-spotify-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </Icon>
              <Icon>
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
            <li>Styled Components</li>
            <li>Spotify API</li>
            <li>Express</li>
            <li>Docker</li>
          </ul>
        </ProjectDescription>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectImage>
          <StaticImage
            alt="My Spotify project image"
            src="../images/issuetracker.png"
            quality={100}
          />
        </ProjectImage>
        <ProjectDescription>
          <h1>
            <a
              href="https://my-spotify.karabiberisapps.com"
              target="_blank"
              rel="noreferrer"
              className="project-link text-link"
            >
              Issuetracker
            </a>
            <div>
              <Icon>
                <a
                  href="https://github.com/pkarabiberis/my-spotify-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </Icon>
              <Icon>
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
            <li>Chakra UI</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>PostgreSQL</li>
            <li>Next.js</li>
            <li>Docker</li>
          </ul>
        </ProjectDescription>
      </ProjectContainer>
    </ProjectSection>
  );
};
