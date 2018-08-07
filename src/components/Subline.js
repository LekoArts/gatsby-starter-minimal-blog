import styled from 'styled-components';

const Subline = styled.div`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.light};
  ${props => props.sectionTitle && 'margin-top: -3rem'};
  ${props => props.sectionTitle && 'margin-bottom: 4rem'};
  ${props => props.sectionTitle && 'text-align: center'};
`;

export default Subline;
