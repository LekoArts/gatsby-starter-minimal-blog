import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, ${props => props.theme.maxWidth}) 1fr;
  padding: 0 1rem;
`

export default Wrapper
