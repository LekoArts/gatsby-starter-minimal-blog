import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import SEO from './SEO'
import theme from '../../config/theme'
import useBuildTime from '../hooks/useBuildTime'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    line-height: 2.0rem;
    font-weight: 400;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.6rem;
    }
    h2 {
      font-size: 1.4rem;
      margin: 2rem auto 1rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    h5 {
      font-size: 1rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.4rem;
      }
      h3 {
        font-size: 1.2rem;
      }
      h4 {
        font-size: 1.1rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.grey.default};
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
  }
  a:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
    font-family: ${props => props.theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`

const Nav = styled.nav`
  background-color: #fff;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(214, 214, 214, 0.4);
  -moz-box-shadow: 0px 2px 4px 0px rgba(214, 214, 214, 0.4);
  box-shadow: 0px 2px 4px 0px rgba(214, 214, 214, 0.4);
  position: fixed;
  width: 100%;
  z-index: 9999;
  a {
    color: black;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }
  li a {
    display: block;
    padding: 12px 16px;
    text-decoration: none;
  }
  li a:hover,
  .menu-btn:hover {
    background-color: #f4f4f4;
  }
  .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 14px 20px;
    text-decoration: none;
  }
  .menu {
    font-size: 16px;
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 32px 24px;
    margin-bottom: -20px;
    position: relative;
    user-select: none;
  }
  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }
  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .menu-icon .navicon:before {
    top: 5px;
  }
  .menu-icon .navicon:after {
    top: -5px;
  }
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu {
    max-height: 100%;
  }
  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  @media (min-width: 72em) {
    li {
      float: left;
    }
    li a {
      padding: 16px 20px;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }
`

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime()

  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav>
          <a href="#" className="logo">
            <svg width="75" height="32" xmlns="http://www.w3.org/2000/svg">
              <g fill="#2D2D2D" fillRule="nonzero">
                <path d="M.936.732V31.25H3.13v.732H.095V0h3.034v.732zM9.386 10.407v1.544h.044a4.461 4.461 0 0 1 1.487-1.368c.58-.323 1.245-.485 1.993-.485.72 0 1.377.14 1.972.42.595.279 1.047.771 1.355 1.477.338-.5.796-.941 1.377-1.323.58-.383 1.266-.574 2.06-.574.602 0 1.16.074 1.674.22.514.148.954.383 1.322.707.366.323.653.746.859 1.268.205.522.308 1.15.308 1.887v7.633H20.71v-6.464c0-.383-.015-.743-.044-1.082a2.305 2.305 0 0 0-.242-.882 1.473 1.473 0 0 0-.584-.596c-.257-.146-.606-.22-1.047-.22-.44 0-.796.085-1.068.253-.272.17-.485.39-.639.662a2.654 2.654 0 0 0-.308.927 7.074 7.074 0 0 0-.078 1.048v6.354h-3.128v-6.398c0-.338-.007-.673-.021-1.004a2.825 2.825 0 0 0-.188-.916 1.411 1.411 0 0 0-.55-.673c-.258-.168-.636-.253-1.135-.253a2.33 2.33 0 0 0-.584.1 1.94 1.94 0 0 0-.705.374c-.228.184-.422.449-.584.794-.161.346-.242.798-.242 1.357v6.619H6.434V10.407h2.952zM25.842 12.084a3.751 3.751 0 0 1 1.233-1.17 5.37 5.37 0 0 1 1.685-.629 9.579 9.579 0 0 1 1.884-.187c.573 0 1.153.04 1.74.121.588.081 1.124.24 1.609.475.484.235.88.562 1.19.981.308.42.462.975.462 1.666v5.934c0 .516.03 1.008.088 1.478.058.471.161.824.308 1.06H32.87a4.435 4.435 0 0 1-.22-1.104c-.5.515-1.087.876-1.762 1.081a7.084 7.084 0 0 1-2.071.31c-.544 0-1.05-.067-1.52-.2a3.472 3.472 0 0 1-1.234-.617 2.87 2.87 0 0 1-.826-1.059c-.199-.426-.298-.934-.298-1.522 0-.647.114-1.18.342-1.6.227-.419.52-.753.881-1.004.36-.25.771-.437 1.234-.562.462-.125.929-.224 1.399-.298.47-.073.932-.132 1.387-.176.456-.044.86-.11 1.212-.199.353-.088.631-.217.837-.386.206-.169.301-.415.287-.74 0-.337-.055-.606-.166-.804a1.217 1.217 0 0 0-.44-.464 1.737 1.737 0 0 0-.639-.22 5.292 5.292 0 0 0-.782-.055c-.617 0-1.101.132-1.454.397-.352.264-.558.706-.617 1.323h-3.128c.044-.735.227-1.345.55-1.83zm6.179 4.423a5.095 5.095 0 0 1-.639.165 9.68 9.68 0 0 1-.716.11c-.25.03-.5.067-.749.11a5.616 5.616 0 0 0-.694.177 2.057 2.057 0 0 0-.594.298c-.17.125-.305.284-.408.474-.103.192-.154.434-.154.728 0 .28.051.515.154.706.103.192.242.342.419.453.176.11.381.187.617.231.234.044.477.066.726.066.617 0 1.094-.102 1.432-.309.338-.205.587-.452.75-.739.16-.286.26-.576.297-.87.036-.295.055-.53.055-.707v-1.17a1.4 1.4 0 0 1-.496.277zM43.884 10.407v2.096h-2.291v5.647c0 .53.088.883.264 1.059.176.177.529.265 1.057.265.177 0 .345-.007.507-.022.161-.015.316-.037.463-.066v2.426a7.49 7.49 0 0 1-.882.089 21.67 21.67 0 0 1-.947.022c-.484 0-.944-.034-1.377-.1a3.233 3.233 0 0 1-1.145-.386 2.04 2.04 0 0 1-.782-.816c-.191-.353-.287-.816-.287-1.39v-6.728H36.57v-2.096h1.894v-3.42h3.129v3.42h2.29zM48.355 10.407v2.118h.044a3.907 3.907 0 0 1 1.454-1.754 4.213 4.213 0 0 1 1.036-.497 3.734 3.734 0 0 1 1.145-.176c.206 0 .433.037.683.11v2.912a5.862 5.862 0 0 0-.528-.077 5.566 5.566 0 0 0-.595-.033c-.573 0-1.058.096-1.454.287a2.52 2.52 0 0 0-.958.783 3.143 3.143 0 0 0-.518 1.158 6.32 6.32 0 0 0-.154 1.434v5.14h-3.128V10.407h2.973zM54.039 8.642V6.06h3.128v2.582H54.04zm3.128 1.765v11.405H54.04V10.407h3.128zM58.797 10.407h3.569l2.005 2.978 1.982-2.978h3.459l-3.745 5.339 4.208 6.067h-3.57l-2.378-3.596-2.38 3.596h-3.502l4.097-6.001zM74.094 31.25V.732H71.9V0h3.035v31.982H71.9v-.732z" />
              </g>
            </svg>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <a href="#">Try Matrix Now!</a>
            </li>
            <li>
              <a href="#">TWIM</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Spec</a>
            </li>
            <li>
              <a href="#">Code</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </Nav>
        {!customSEO && <SEO buildTime={buildTime} />}
        <GlobalStyle />
        {children}
        <Footer>
          &copy; 2019 Matrix.org. All rights reserved. <br /> <br />
          <a href="https://matrix.org/docs/guides/matrix_org_legal.html">Legal</a> <br /> <br />
          <a href="https://matrix.org/docs/api">Client-Server APIs</a> <br /> <br />
          <span>Last build: {buildTime}</span>
        </Footer>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
