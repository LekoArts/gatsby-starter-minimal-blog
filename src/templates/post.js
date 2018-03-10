import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const BlogPost = styled.article`
  grid-column: 2;
  box-shadow: 0 0 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 6rem;
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  @media ${media.tablet} {
    padding: 3rem 4rem;
  }
`;

const Title = styled.h1`
  margin-top: 2rem;
`;

const Content = styled.div`
  margin-top: 4rem;
`;

const Post = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <BlogPost>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <Link to="/">{config.siteTitle} | Get back to the overview</Link>
      <Title>{post.title}</Title>
      <h4>{post.date}</h4>
      <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
    </BlogPost>
  );
};

export default Post;

/* eslint no-undef: off */
export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`;
