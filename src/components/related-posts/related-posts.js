import React from 'react'
import { StyledLink } from '../commons'
import Flag from '../flag'
import siteConfig from '../../../data/siteConfig'

class RelatedPosts extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <ul>
        {posts.map(post => {
          const title = post.node.frontmatter.title
          const slug = post.node.frontmatter.slug
          const language = post.node.frontmatter.language || 'en'
          return (
            <li key={slug}>
              <StyledLink to={slug}>
                {siteConfig.multilangPosts && <Flag language={language} />}
                {title}
              </StyledLink>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default RelatedPosts
