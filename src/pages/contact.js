/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Header, Button } from 'components';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Contact</h1>
        <p>Super cool intro text to get people contacting me! It uses Netlify's form feature.</p>
        <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <p>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" required />
          </p>
          <p>
            <label htmlFor="email">E-Mail</label>
            <input name="email" type="email" required />
          </p>
          <p>
            <label htmlFor="message">Your Message</label>
            <textarea name="message" required />
          </p>
          <p>
            <Button>Send</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
