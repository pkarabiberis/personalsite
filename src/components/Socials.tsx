import React from 'react';
import styled from 'styled-components';
import { Github } from '../icons/Github';
import { Linkedin } from '../icons/Linkedin';
import theme from '../styles/theme';

interface SocialsProps {}

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${theme.colors.darkGrey};
`;

const Icon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;

    a {
      text-decoration: none;
    }
  }
`;

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <SocialsContainer>
      <Line />
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
    </SocialsContainer>
  );
};
