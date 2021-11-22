import React from 'react';
import styled from 'styled-components';
import { Github } from '../icons/Github';
import { Linkedin } from '../icons/Linkedin';
import theme from '../styles/theme';

interface SocialsProps {}

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Resume = styled.a`
  button {
    color: ${theme.colors.darkGrey};
    background-color: transparent;
    border: 1px solid ${theme.colors.darkGrey};
    padding: 0.75rem 1rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    border-radius: 4px;

    &:hover {
      background-color: #31979545;
      color: ${theme.colors.teal};
      border-color: ${theme.colors.teal};
    }
  }
`;

const Icon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;

    a {
      text-decoration: none;
    }
  }
`;

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <SocialsContainer>
      <Icon className="icon-link">
        <a
          href="https://www.linkedin.com/in/pavloskarabiberis"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </Icon>
      <Icon className="icon-link">
        <a
          href="https://github.com/pkarabiberis"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </Icon>
      <Resume href={`resume.pdf`} target="_blank" rel="noreferrer">
        <button>Resume</button>
      </Resume>
    </SocialsContainer>
  );
};
