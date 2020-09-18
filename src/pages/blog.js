import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

// Main:
const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog"></Blogs>
      </section>
    </Layout>
  )
}

// Query:
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        title
        desc
        content
        date(formatString: "MMMM DD, YYYY")
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`

export default Blog
