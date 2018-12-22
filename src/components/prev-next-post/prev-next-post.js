import React, { Fragment } from 'react'
import RelatedPosts from '../related-posts'
import { Text } from '../commons'

class PrevNextPost extends React.Component {
  render() {
    const { previous, next } = this.props
    const articles = [previous, next]
      .filter(i => i)
      .map(item => ({ node: item }))

    return (
      <Fragment>
        <Text>Read next:</Text>
        <RelatedPosts posts={articles} />
      </Fragment>
    )
  }
}

export default PrevNextPost
