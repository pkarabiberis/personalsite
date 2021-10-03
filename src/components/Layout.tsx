import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

interface layoutProps {}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 960px;
  margin: 50px auto;
`;

export const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Content>
        <GlobalStyle />
        {children}
      </Content>
    </ThemeProvider>
  );
};
