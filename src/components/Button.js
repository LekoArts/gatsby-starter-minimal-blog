import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Wrapper = styled.button`
  background: ${props => props.theme.primary};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '1.5rem' : '1rem')};
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  color: white;
  padding: ${props => (props.big ? '0.35rem 1.6rem' : '0.25rem 1.5rem')};
  transition: all ${props => props.theme.transitionTime};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background: ${props => lighten(0.05, props.theme.primary)};
    cursor: pointer;
    transform: translateY(-2px);
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: white;
  }
`;

const Button = props => <Wrapper big={props.big}>{props.children}</Wrapper>;

export default Button;
