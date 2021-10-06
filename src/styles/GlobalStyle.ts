import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    font-family: "Poppins";
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .text-link {
      display: inline-block;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      transition: .3s;
  }



  .project-link {
      &:hover {
      border-bottom: 1px solid black;
    }
  }

    .company-link {
      &:hover {
      border-bottom: 1px solid ${theme.colors.purple};
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    color: ${theme.colors.grey};
  }

  p {
    color: ${theme.colors.grey};
    line-height: 1.3;
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
