import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 960px;
  margin: 50px auto 0 auto;
  padding: 20px;
  opacity: 0;
  animation: ${FadeIn} 0.6s 0.3s ease-in-out forwards;

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Content>
        <GlobalStyle />
        {children}
      </Content>
    </ThemeProvider>
  );
};
