import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import Subline from '../components/Subline';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.header`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.primary)},
    ${props => lighten(0.1, props.theme.primary)}
  );
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 5rem 2rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  a {
    color: white;
  }
`;

const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const Post = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <Wrapper>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <Header>
        <HeaderContent>
          <Link to="/">{config.siteTitle}</Link>
        </HeaderContent>
      </Header>
      <Content>
        <Title>{post.title}</Title>
        <Subline>
          {post.date} &mdash; {postNode.timeToRead} Min Read
        </Subline>
        <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Content>
    </Wrapper>
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
      timeToRead
    }
  }
`;
