import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Socials } from './Socials';

interface HeaderProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HomeButton = styled.h1`
  color: ${theme.colors.purple};
  font-size: ${theme.fontSizes.md};
`;

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <HomeButton>P</HomeButton>
      <Socials />
    </Container>
  );
};
