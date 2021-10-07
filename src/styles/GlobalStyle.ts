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
    color: inherit;
  }

  .text-link {
      display: inline-block;
      border-bottom: 1px solid transparent;
      transition: .3s;
  }

  h2 {
    font-weight: 600;
    font-size: clamp(20px, 8vw, ${theme.fontSizes.md});
  }

  .icon-link {
    a {
      &:hover {
        color:  ${theme.colors.purple};
        svg {
          stroke: ${theme.colors.purple};
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
      border-bottom: 1px solid ${theme.colors.purple};
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    color: ${theme.colors.grey};
    letter-spacing: 0.03em;
  }

  p {
    color: ${theme.colors.grey};
    line-height: 1.3;
    letter-spacing: 0.03em;
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
