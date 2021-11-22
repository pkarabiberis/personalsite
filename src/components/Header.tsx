import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../icons/Logo';
import { Socials } from './Socials';

interface HeaderProps {}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const LogoContainer = styled.div`
  svg {
    vertical-align: middle;
    height: 40px;
    width: 40px;
  }
`;

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <Socials />
    </Container>
  );
};
