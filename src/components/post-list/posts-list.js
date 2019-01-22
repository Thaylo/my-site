import React, { Fragment } from 'react'

import PostsListItem from './posts-list-item'

class PostsList extends React.Component {
  render() {
    const { posts } = this.props
    const publishedPosts = posts.filter(post => !post.node.frontmatter.draft)

    return (
      <Fragment>
        {publishedPosts.length ? (
          publishedPosts.map(post => {
            const props = {
              title: post.node.frontmatter.title,
              excerpt: post.node.excerpt,
              slug: post.node.frontmatter.slug,
              date: post.node.frontmatter.date,
              language: post.node.frontmatter.language || 'fr',
              tags: post.node.frontmatter.tags || [],
            }
            return <PostsListItem key={props.slug} {...props} />
          })
        ) : (
          <h3 style={{ textAlign: 'center' }}>No posts by now.</h3>
        )}
      </Fragment>
    )
  }
}
export default PostsList
