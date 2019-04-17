import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Subline from './Subline'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.h1`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const PostContent = styled.div`
  margin-top: 4rem;
`

const Article = ({ title, date, excerpt, slug, timeToRead, categories, body }) => (
  <Post>
    <Title>
      <Link to={slug}>{title}</Link>
    </Title>
    <Subline>
      {date} &mdash;&nbsp;
      {categories.map((cat, i) => (
        <React.Fragment key={cat}>
          {!!i && ', '}
          <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
        </React.Fragment>
      ))}
    </Subline>
    <Excerpt>{excerpt}</Excerpt>
    <PostContent>
      <MDXRenderer>{body}</MDXRenderer>
    </PostContent>
  </Post>
)

export default Article

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
}
