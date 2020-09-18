import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

//Main:
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects"></Projects>
      </section>
    </Layout>
  )
}

export default ProjectsPage

// Page Query for ALL PROJECTS:
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiProjects {
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
  }
`
