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
  const [activeTab, setActiveTab] = useState<number>(0);
  const jobs = [
    {
      name: 'Marjetas',
      role: 'Junior Developer',
      range: 'May - September 2021 Full time',
      range2: 'Oct 2020 - May 2021 Intership',
      tasks: [
        'Developed and maintained code for in-house websites using HTML, CSS and JavaScript',
        'Interfaced with clients on a regular basis',
        'Engineered and shipped major features on Marjetas’ Android app',
      ],
    },
    {
      name: 'Frostbit',
      role: 'Web Developer',
      range: 'May - Aug 2019 Intership',
      tasks: [
        'Gained work experience as an intern in the field of Web Design and Development.',
        'Learned front-end frameworks',
        'Created web-apps using Vue.js',
      ],
    },
  ];

  return (
    <WorkSection>
      <h2>Where I've Worked</h2>
      <WorkContainer>
        <Left>
          {jobs.map(({ name }, i) => (
            <HighlightText
              active={activeTab === i}
              onClick={() => setActiveTab(i)}
              key={i}
            >
              <h3>{name}</h3>
            </HighlightText>
          ))}
        </Left>
        <Right>
          <h3>
            <span>{jobs[activeTab].role}</span>
            <span className="company">
              &nbsp;@&nbsp;
              <a
                className="company-link text-link"
                href={'https://www.marjetas.fi'}
                target="_blank"
                rel="noreferrer"
              >
                {jobs[activeTab].name}
              </a>
            </span>
          </h3>
          <p>{jobs[activeTab].range}</p>
          {jobs[activeTab].range2 && <p>Oct 2020 - May 2021 Intership</p>}
          <ul>
            {jobs[activeTab].tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </Right>
        {/* <Left>
          <h3>Marjetas</h3>
          <h3>Frostbit</h3>
        </Left>
        <Right></Right> */}
      </WorkContainer>
      {/* <h3>
        <span>Junior Developer</span>
        <span className="company">
          &nbsp;@&nbsp;
          <a
            className="company-link text-link"
            href={'https://www.marjetas.fi'}
            target="_blank"
            rel="noreferrer"
          >
            Marjetas
          </a>
        </span>
      </h3>
      <p>May - September 2021 Full time</p>
      <p>Oct 2020 - May 2021 Intership</p>
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
            className="company-link text-link"
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
      </ul> */}
    </WorkSection>
  );
};
