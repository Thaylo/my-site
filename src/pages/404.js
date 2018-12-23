import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'
import RelatedPosts from '../components/related-posts'
import { Text } from '../components/commons'

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Ovni = styled.p`
  line-height: 1.5;
  text-align: center;
  font-size: 7rem;
`

const SubTitle = styled.h2`
  padding-top: 40px;
  line-height: 1.2;
  border-top: 1px solid #ececec;
  margin-top: 44px;
`

const CenteredText = styled(Text)`
  text-align: center;
`

class NotFoundPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.draft)

    return (
      <Layout location={this.props.location} noCover={true}>
        <SEO title="Page Not Found" />
        <Hero
          heroImg='/images/404.jpeg'
          title='404'
        />
        <Wrapper>
          <MainTitle>404 Page Not Found</MainTitle>
          <Ovni>🛸</Ovni>
          <CenteredText>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </CenteredText>

          <SubTitle>Recent Posts</SubTitle>

          <RelatedPosts posts={posts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "page" } } }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
            language
            slug
            draft
          }
        }
      }
    }
  }
`
