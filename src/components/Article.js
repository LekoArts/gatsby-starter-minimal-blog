import React from 'react';
import Link from 'gatsby-link';

import styles from './Article.module.css';

const Article = ({
  title, date, excerpt, slug,
}) => {
  const firstChar = title.charAt(0);

  return (
    <article className={styles.post}>
      <h2 className={styles.title}>
        <span className={styles.initiale}>{firstChar}</span>
        <Link to={slug}>{title}</Link>
      </h2>
      <h4 className={styles.date}>{date}</h4>
      <p className={styles.excerpt}>{excerpt}</p>
    </article>
  );
};

export default Article;
