import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  // console.log(nodes[0]) // Vemos el Object, primer Index del Array
  // Destructure:
  const { title, stack, info, image } = nodes[0]
  // Main:
  return (
    <Layout>
      <SEO title="About"></SEO>
      <section className="about-page">
        <div className="section-center about-center">
          <Image
            fluid={image.childImageSharp.fluid}
            className="about-img"
          ></Image>
          <article className="about-text">
            <Title title={title}></Title>
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}> {item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

// Query Single Type:
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
