import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const UsesPage = ({ data }) => {
  return (
    <Layout pageTitle="Uses">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
      allMdx(
        filter: {slug: {regex: "/uses/"}}
      ) {
        nodes {
          frontmatter {
            title
          }
          id
          body
        }
      }
  }
`
export default UsesPage
