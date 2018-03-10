/* eslint no-unused-expressions:0 */

import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import SEO from '../components/SEO';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  html {
    background: ${theme.bg};
    color: ${theme.body};
    @media ${media.phone} {
      font-size: 14px;
    }
    @media ${media.tablet} {
      font-size: 15px;
    }
  }
  a {
    color: ${theme.black};
    text-decoration: none;
    transition: color ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
`;

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1000px) 1fr;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Wrapper>
          <SEO />
          {children()}
        </Wrapper>
        <Footer>&copy; 2018 by John Doe. All rights reserved.</Footer>;
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
