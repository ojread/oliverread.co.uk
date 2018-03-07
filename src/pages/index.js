import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <Hero title="JAMstack development" subtitle="Smell my cheese, you mother!" />

        <section className="section">
          <div className="container">

            <article class="message is-warning">
              <div class="message-header">
                <p>What's wrong with this website?</p>
              </div>
              <div class="message-body">
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
                      <span class="icon">
                        <i class="far fa-calendar-alt"></i>
                      </span>
                      <small>{post.frontmatter.date}</small>
                    </p>

                    <p>
                      {post.excerpt}
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
      </div>
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
          }
        }
      }
    }
  }
`
