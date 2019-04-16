import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Wrapper, Header, Subline, Article, SectionTitle } from '../components'
import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`

const PostList = ({ pageContext: { limit, skip }, data: { allMdx } }) => {
  const { edges, totalCount } = allMdx
  const subline = `subline here, was category`

  return (
    <Layout>
      <Wrapper>
        <Helmet />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <SectionTitle>Category &ndash;</SectionTitle>
          <Subline sectionTitle>
            {subline} (See <Link to="/categories">all categories</Link>)
          </Subline>
          {edges.map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              categories={post.node.frontmatter.categories}
              key={post.node.fields.slug}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default PostList

PostList.propTypes = {
  pageContext: PropTypes.shape({
    limit: PropTypes.string.isRequired,
    skip: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query PostListPage($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
