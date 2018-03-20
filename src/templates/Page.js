import React from 'react'
import Content, { HTMLContent } from '../components/Content'

// Template itself is exported separately for use in previews etc.
export const PageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
          {title}
        </h2>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

// Default export takes data from query and renders template with it.
export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

// GraphQL query looks up node id and returns markdown content.
export const pageQuery = graphql`
  query page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
