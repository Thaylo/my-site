import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import Wrapper from '../components/wrapper'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Disqus from '../components/disqus'

class Page extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Layout location={this.props.location}>
        <SEO
          title={page.frontmatter.title}
          description={page.excerpt}
          path={page.frontmatter.slug}
          cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        />

        <Hero
          heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
          title={page.frontmatter.title}
        />

        <Wrapper>
          <article>
            <Content content={page.html} date={page.frontmatter.date} />
          </article>
        </Wrapper>

        {page.frontmatter.disqus && (
          <Wrapper>
            <Disqus
              slug={page.frontmatter.slug}
              title={page.frontmatter.title}
            />
          </Wrapper>
        )}
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        cover {
          publicURL
        }
      }
    }
  }
`
