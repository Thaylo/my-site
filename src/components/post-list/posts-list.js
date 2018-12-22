import React, { Fragment } from 'react'

import PostsListItem from './posts-list-item'

class PostsList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            excerpt: post.node.excerpt,
            slug: post.node.frontmatter.slug,
            date: post.node.frontmatter.date,
            language: post.node.frontmatter.language || 'fr',
            tags: post.node.frontmatter.tags || [],
          }
          return <PostsListItem key={props.slug} {...props} />
        })}
      </Fragment>
    )
  }
}
export default PostsList
