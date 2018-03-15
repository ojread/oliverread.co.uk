import React from 'react'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">

          <article className="message is-warning">
            <div className="message-header">
              <p>What's wrong with this website?</p>
            </div>
            <div className="message-body">
              I'm using this website to experiment with modern development 
              tools. See the <Link to="/about">about page</Link> for 
              more details.
            </div>
          </article>

          {posts
            .filter(post => post.node.frontmatter.templateKey === 'Post')
            .map(({ node: post }) => (
              <div className="box" key={post.id}>
                <div className="content">
                
                  <h3>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>

                  <p>
                    <span className="icon">
                      <i className="far fa-calendar-alt"></i>
                    </span>
                    <small>{post.frontmatter.date}</small>
                  </p>

                  <p>
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`
