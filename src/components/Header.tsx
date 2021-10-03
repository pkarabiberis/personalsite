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
`;

const HomeButton = styled.h1`
  color: ${theme.colors.purple};
  font-size: ${theme.fontSizes.md};
`;

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <HomeButton>PK</HomeButton>
      <Socials />
    </Container>
  );
};
