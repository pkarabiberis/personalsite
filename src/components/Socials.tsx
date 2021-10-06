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
  background-color: #e6e6e6;
`;

const Icon = styled.span`
  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;

    &:hover {
      stroke: ${theme.colors.purple};
    }

    a {
      text-decoration: none;
    }
  }
`;

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <SocialsContainer>
      <Line />
      <Icon>
        <a
          href="https://www.linkedin.com/in/pavlos-karabiberis-7205331b5"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </Icon>
      <Icon>
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
