import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from 'components';
import { media } from '../utils/media';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const Post = props => {
  const { slug, prev, next } = props.pageContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <Layout>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
          </Subline>
          <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <PrevNext prev={prev} next={next} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
      }
      timeToRead
    }
  }
`;
