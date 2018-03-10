import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Post = styled.article`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  position: relative;
  margin-bottom: 0;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 8rem;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  user-select: none;
  z-index: -1;
`;

const Date = styled.h4`
  margin-bottom: 0;
  text-align: right;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1.35rem;
  margin-bottom: 0;
`;

const Article = ({ title, date, excerpt, slug }) => {
  const firstChar = title.charAt(0);

  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Date>{date}</Date>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;
