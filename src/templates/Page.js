import React from 'react'
import Content, { HTMLContent } from '../components/Content'

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
