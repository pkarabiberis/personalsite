import React from 'react';
import styled from 'styled-components';
import { Email } from '../icons/Email';
import { Github } from '../icons/Github';
import { Linkedin } from '../icons/Linkedin';

const ContactSection = styled.footer`
  padding: 40px 0 15px 0;
  margin: auto;
  text-align: center;

  p {
    max-width: 450px;
    margin: 0 auto 25px auto;
  }

  .copyright {
    margin: 50px auto 0 auto;
    font-size: 13px;
  }

  .social-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    a {
      margin: 0 10px;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const Contact = ({}) => {
  return (
    <ContactSection>
      <h2>Get In Touch</h2>
      <p>
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>

      <div className="social-buttons icon-link">
        <a
          href="https://www.linkedin.com/in/pavloskarabiberis"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
          Linkedin
        </a>
        <a
          href="https://www.github.com/pkarabiberis"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
          Github
        </a>
        <a
          href="mailto:karabiberis.pavlos@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email />
          Email
        </a>
      </div>

      <p className="copyright">Designed & Created by Pavlos Karabiberis</p>
    </ContactSection>
  );
};
