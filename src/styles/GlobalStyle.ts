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
    background-color: #EDF2F7;
    color: ${theme.colors.darkGrey};
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .text-link {
      display: inline-block;
      border-bottom: 1px solid transparent;
      transition: .3s;
  }

  h2 {
    font-weight: 700;
    color: ${theme.colors.darkGrey};
    font-size: clamp(20px, 8vw, ${theme.fontSizes.md});
  }

  .icon-link {
    a {
      &:hover {
        color:  ${theme.colors.teal};
        svg {
          stroke: ${theme.colors.teal};
        }
      }
    }
  }

  .project-link {
    &:hover {
      border-bottom: 1px solid black;
    }
  }

  .company-link {
    &:hover {
      border-bottom: 1px solid ${theme.colors.teal};
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    font-size: 13px;
  }

  p, li {
    color: ${theme.colors.darkGrey};
    line-height: 1.5;
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
