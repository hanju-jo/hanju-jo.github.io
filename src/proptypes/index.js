import PropTypes from 'prop-types';

const {
    shape: ptShape,
    string: ptString,
    arrayOf: ptArrayOf,
  } = PropTypes;

export const siteSocial = ptShape({
    githubUrl: ptString.isRequired,
    linkedInUrl: ptString.isRequired,
  });

export const site = ptShape({
  siteMetadata: ptShape({
    siteUrl: ptString.isRequired,
    title: ptString.isRequired,
    author: ptString.isRequired,
    description: ptString.isRequired,
    social: siteSocial.isRequired,
  }).isRequired,
});

export const markdownRemark = ptShape({
  frontmatter: ptShape({
    title: ptString.isRequired,
    date: ptString.isRequired,
    updated: ptString.isRequired,
    path: ptString.isRequired,
  }).isRequired,
  html: ptString.isRequired,
}).isRequired;

export const allMarkdownRemark = ptShape({
  edges: ptArrayOf(
    ptShape({
      node: markdownRemark,
    }).isRequired,
  ).isRequired,
}).isRequired;
