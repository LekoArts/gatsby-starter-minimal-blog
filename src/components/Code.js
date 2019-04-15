/* eslint react/jsx-boolean-value: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styled from 'styled-components'

const StyledEditor = styled(LiveEditor)`
  background: ${theme.plain.backgroundColor};
  border-radius: 5px;
  margin-bottom: 1rem;
`

const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <StyledEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
