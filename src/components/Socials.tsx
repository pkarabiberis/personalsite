import React from 'react';
import styled from 'styled-components';
import { Github } from '../icons/Github';
import { Linkedin } from '../icons/Linkedin';
import theme from '../styles/theme';

interface SocialsProps {}

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 20px;
    width: 20px;
    height: 20px;
  }
`;

const Line = styled.div`
  width: 200px;
  height: 2px;
  background-color: ${theme.colors.grey};
`;

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <SocialsContainer>
      <Line />
      <Linkedin />
      <Github />
    </SocialsContainer>
  );
};
