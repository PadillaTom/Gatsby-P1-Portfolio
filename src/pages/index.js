import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
// Main:
export default ({ data }) => {
  // console.log(data) // Comprobamos que vemos los objects, 2 projects
  //  Destructure Projects:
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Hero> </Hero>
      <Services></Services>
      <Jobs></Jobs>
      <Projects
        projects={projects}
        title="Featured Projects"
        showLink
      ></Projects>
      <Blogs blogs={blogs} title="latest Articles" showLink></Blogs>
    </Layout>
  )
}

// Projects Query to PASS PROPS inside
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          title
          id
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        content
        slug
        title
        desc
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
