import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../icons/ExternalLink';
import { Github } from '../icons/Github';
import theme from '../styles/theme';

interface IconFill {
  fill: boolean;
}

const ProjectSection = styled.section`
  margin-top: 50px;

  h2 {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
  }
`;

const ProjectContainer = styled.div`
  display: flex;
`;

const ProjectImage = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 4px;
  transition-duration: 0.3s;
  border: 1px solid #e6e6e6;
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
`;

const Icon = styled.span<IconFill>`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;

    &:hover {
      fill: ${({ fill }) => (fill ? theme.colors.purple : undefined)};
      stroke: ${({ fill }) => (!fill ? theme.colors.purple : undefined)};
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
              className="project-link"
            >
              My Spotify
            </a>
            <div>
              <Icon fill={false}>
                <Github />
              </Icon>
              <Icon fill={true}>
                <ExternalLink />
              </Icon>
            </div>
          </h1>
          <p>
            A web application that shows your Spotify data. Includes top
            artists, top tracks, recently played tracks, playlists and detailed
            information about each track.
          </p>
        </ProjectDescription>
      </ProjectContainer>
    </ProjectSection>
  );
};
