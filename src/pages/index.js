import React from 'react';
import styled from 'styled-components';
import Article from '../components/Article';

import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 0 120px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  padding: 3rem 6rem;
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
`;

const Hero = styled.div`
  margin-bottom: 12rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.black};

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;

const IndexPage = props => {
  const postEdges = props.data.allMarkdownRemark.edges;

  return (
    <Content>
      <Hero>
        <h1>Hi.</h1>
        <p>
          I&apos;m John Doe, a Senior UX Developer with five years of industry experience, specializing in developing
          React apps with the best UX users can get.
        </p>
      </Hero>
      {postEdges.map(post => (
        <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          slug={post.node.fields.slug}
          key={post.node.fields.slug}
        />
      ))}
    </Content>
  );
};

export default IndexPage;

/* eslint no-undef: off */
export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
