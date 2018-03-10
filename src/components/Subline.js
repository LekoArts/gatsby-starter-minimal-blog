import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.light};
`;

const Subline = props => <Line>{props.children}</Line>;

export default Subline;
