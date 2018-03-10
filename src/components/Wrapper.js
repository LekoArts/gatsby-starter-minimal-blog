import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1000px) 1fr;
  padding: 0 1rem;
`;

const Wrapper = props => <Grid>{props.children}</Grid>;

export default Wrapper;
