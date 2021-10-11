import { graphql, useStaticQuery } from 'gatsby';
import { getImage, StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../icons/ExternalLink';
import { Github } from '../icons/Github';
import theme from '../styles/theme';

interface Placement {
  left?: boolean;
}

const ProjectSection = styled.section`
  padding: 40px 0;
`;

const ProjectContainer = styled.div<Placement>`
  display: flex;
  margin: 40px 0 60px;
  flex-direction: ${({ left }) => left && 'row-reverse'};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  transition-duration: 0.3s;
  height: fit-content;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: #31979518;
    border-radius: 1em;
    border: 1px solid #adb8b776;
  }
  &:hover {
    transform: scale(1.03);

    &:before {
      background: transparent;
    }
  }

  .gatsby-image-wrapper {
    border-radius: 1em;
  }
`;

const ProjectDescription = styled.div<Placement>`
  width: 50%;

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    font-weight: 700;
    font-size: ${theme.fontSizes.base};
  }

  h1,
  p,
  ul {
    margin-left: ${({ left }) => (!left ? '25px' : 0)};
    margin-right: ${({ left }) => (left ? '25px' : 0)};
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 5px;
  }

  li {
    display: flex;
    font-size: 12px;
    font-weight: 500;

    &:before {
      content: 'o';
      color: ${theme.colors.teal};
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto 0 auto;

    h1,
    p {
      margin: 5px auto 0 auto;
    }

    ul {
      margin: 25px auto 0 auto;
      max-width: 300px;
      grid-column-gap: 5px;
    }
  }
`;

const Icon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              imageSrc {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              github
              url
              tech
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.map(({ node }: any) => node);
  return (
    <ProjectSection>
      <h2>Things I've Built</h2>
      {projects.map(
        (project: any, i: any) => {
          const { frontmatter, html } = project;
          const { title, imageSrc, github, url, tech } = frontmatter;
          const image = getImage(imageSrc);
          return (
            <ProjectContainer key={title} left={(i + 1) % 2 !== 0}>
              <ProjectImage>
                <GatsbyImage alt={`${title} project image`} image={image!} />
              </ProjectImage>

              <ProjectDescription left={(i + 1) % 2 !== 0}>
                <h1>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link text-link"
                  >
                    {title}
                  </a>
                  <div>
                    <Icon className="icon-link">
                      <a href={github} target="_blank" rel="noreferrer">
                        <Github />
                      </a>
                    </Icon>
                    <Icon className="icon-link">
                      <a href={url} target="_blank" rel="noreferrer">
                        <ExternalLink />
                      </a>
                    </Icon>
                  </div>
                </h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <ul>
                  {tech.map((t: any) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </ProjectDescription>
            </ProjectContainer>
          );
        }

        // <ProjectContainer left={left} key={name}>
        //   <ProjectImage>
        //     <StaticImage
        //       alt={`${name} project image`}
        //       src={imgSrc}
        //       quality={100}
        //     />
        //   </ProjectImage>
        //   <ProjectDescription left={left}>
        //     <h1>
        //       <a
        //         href={url}
        //         target="_blank"
        //         rel="noreferrer"
        //         className="project-link text-link"
        //       >
        //         {name}
        //       </a>
        //       <div>
        //         <Icon className="icon-link">
        //           <a href={github} target="_blank" rel="noreferrer">
        //             <Github />
        //           </a>
        //         </Icon>
        //         <Icon className="icon-link">
        //           <a href={url} target="_blank" rel="noreferrer">
        //             <ExternalLink />
        //           </a>
        //         </Icon>
        //       </div>
        //     </h1>
        //     <p>{description}</p>
        //     <ul>
        //       {tech.map((t) => (
        //         <li key={t}>{t}</li>
        //       ))}
        //     </ul>
        //   </ProjectDescription>
        // </ProjectContainer>
      )}
      {/* <ProjectContainer>
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
      </ProjectContainer> */}
      {/* <NewProjectContainer>
        <NewProjectDescription>
          <h1>Issue Tracker</h1>
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
        </NewProjectDescription>
        <NewProjectImage>
          <StaticImage
            alt="Issuetracker project image"
            src="../images/issuetracker.png"
            quality={100}
          />
        </NewProjectImage>
      </NewProjectContainer> */}
    </ProjectSection>
  );
};
