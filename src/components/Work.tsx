import { useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

interface ActiveTab {
  active?: boolean;
}

const WorkSection = styled.section`
  padding: 40px 0;

  h3 {
    font-weight: 500;
    line-height: 1.1;
    font-size: ${theme.fontSizes.base};
  }

  .company {
    color: ${theme.colors.teal};
  }

  li {
    margin-bottom: 10px;
    display: flex;
    &:before {
      content: 'o';
      display: block;
      color: ${theme.colors.teal};
      font-weight: 500;
      margin-right: 5px;
    }
  }

  hr {
    border: 0;
    border-bottom: 1px solid #e6e6e6;
  }

  @media (max-width: 768px) {
    margin: auto;
    max-width: 500px;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  min-height: 300px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 15%;
  @media (max-width: 768px) {
    display: inline-flex;
    width: 100%;
  }
`;

const HighlightText = styled.div<ActiveTab>`
  h3 {
    cursor: pointer;
    border-left: 2px solid
      ${({ active }) => (active ? theme.colors.teal : '#cbd5e0')};
    color: ${({ active }) =>
      active ? theme.colors.teal : theme.colors.darkGrey};
    margin: 0;
    padding: 15px 0 10px 20px;
    font-size: 13px;
    font-weight: 400;
    @media (max-width: 768px) {
      border-bottom: 2px solid
        ${({ active }) => (active ? theme.colors.teal : '#cbd5e0')};
      padding: 0 10px 15px 10px;
      border-left: none;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  h3 {
    padding: 15px 0;
    margin: 0;
  }
  p {
    font-size: 13px;
    margin: 0;
    line-height: 1.5;
  }

  ul {
    margin-top: 25px;
  }
`;

export const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              url
              range
              range2
            }
            html
          }
        }
      }
    }
  `);

  const jobs = data.jobs.edges.map(({ node }: any) => node);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <WorkSection>
      <h2>Where I've Worked</h2>
      <WorkContainer>
        <Left>
          {jobs.map((node: any, i: any) => {
            const { company } = node.frontmatter;
            return (
              <HighlightText
                active={activeTab === i}
                onClick={() => setActiveTab(i)}
                key={i}
              >
                <h3>{company}</h3>
              </HighlightText>
            );
          })}
        </Left>
        <Right>
          <h3>
            <span>{jobs[activeTab].frontmatter.title}</span>
            <span className="company">
              &nbsp;@&nbsp;
              <a
                className="company-link text-link"
                href={jobs[activeTab].frontmatter.url}
                target="_blank"
                rel="noreferrer"
              >
                {jobs[activeTab].frontmatter.company}
              </a>
            </span>
          </h3>
          <p>{jobs[activeTab].frontmatter.range}</p>
          {jobs[activeTab].frontmatter.range2 && (
            <p>{jobs[activeTab].frontmatter.range2}</p>
          )}
          <ul>
            <div dangerouslySetInnerHTML={{ __html: jobs[activeTab].html }} />
          </ul>
        </Right>
      </WorkContainer>
    </WorkSection>
  );
};
