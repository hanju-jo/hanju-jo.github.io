/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PostLink = styled(Link)`
  display: inline-block;
  background-image: none;
  border-bottom: 1px solid #eee;
  padding-left: 1rem;
  padding-right: 1rem;

  /* Make the block slightly larger than the container but still aligned to elements outside.
   * It's sufficient to add the offset on the left side, and the +2rem will take care of the right
   * side */
  margin-left: -1rem;
  width: calc(100% + 2rem);

  &:hover {
    background-color: #f8f8f7;
    background-image: none;
    text-decoration: none;
  }
`;

const PostContent = styled.div`
  color: hsla(0, 0%, 0%, 0.8);
  opacity: 0.8;
`;

const PostTitle = styled.h3`
  margin-top: 1rem;
`;

const PostDate = styled.small`
  display: block;
  margin-bottom: 0.5rem;
`;

export default function IndexPage({ posts }) {
  return (
    <div>
    {posts.map(({ title, path, updated }) => (
        <PostLink key={path} to={path}>
            <PostTitle>{title}</PostTitle>
            <PostContent>
                <PostDate>{updated}</PostDate>
            </PostContent>
        </PostLink>
    ))}
    </div>
  );
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
