import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const WorkSection = styled.section`
  margin-top: 50px;

  h2 {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
  }

  h3 {
    font-weight: 500;
    line-height: 1.1;
    font-size: ${theme.fontSizes.base};
  }

  .company {
    color: ${theme.colors.purple};
  }

  li {
    margin-bottom: 10px;
    display: flex;
    &:before {
      content: 'o';
      display: block;
      color: ${theme.colors.purple};
      font-weight: 500;
      margin-right: 5px;
    }
  }

  hr {
    border: 0;
    border-bottom: 1px solid #e6e6e6;
  }

  @media (max-width: 768px) {
    margin: 50px auto;
  }
`;

export const Work = () => {
  return (
    <WorkSection>
      <h2>Where I've Worked</h2>

      <h3>
        <span>Junior Developer</span>
        <span className="company">
          &nbsp;@&nbsp;
          <a
            className="company-link"
            href={'https://www.marjetas.fi'}
            target="_blank"
            rel="noreferrer"
          >
            Marjetas
          </a>
        </span>
      </h3>
      <p>May - September 2021 Full time | Oct 2020 - May 2021 Intership</p>
      <ul>
        <li>
          Developed and maintained code for in-house websites using HTML, CSS
          and JavaScript
        </li>
        <li>Interfaced with clients on a regular basis</li>
        <li>Engineered and shipped major features on Marjetas’ Android app</li>
      </ul>
      <hr />
      <h3>
        <span>Web developer</span>
        <span className="company">
          &nbsp;@&nbsp;
          <a
            href={'https://www.frostbit.fi'}
            className="company-link"
            target="_blank"
            rel="noreferrer"
          >
            FrostBit
          </a>
        </span>
      </h3>
      <p>May - Aug 2019 Intership</p>
      <ul>
        <li>
          Gained work experience as an intern in the field of Web Design and
          Development.
        </li>
        <li>Learned front-end frameworks</li>
        <li>Created web-apps using Vue.js</li>
      </ul>
    </WorkSection>
  );
};
