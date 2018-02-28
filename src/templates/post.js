import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import styles from './post.module.css';

import config from '../../config/SiteConfig';

const Post = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;

  return (
    <article className={styles.blogPost}>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <Link to="/">{config.siteTitle} | Get back to the overview</Link>
      <h1 className={styles.title}>{post.title}</h1>
      <h4 className={styles.date}>{post.date}</h4>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: postNode.html }} />
    </article>
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
