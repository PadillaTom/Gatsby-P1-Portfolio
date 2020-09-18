import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

// Variable:
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// Main Function:
const Hero = () => {
  // Destructure la Query para obtener la FLUID Img
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I am Tomas</h1>
          <h4>Self-taught Web Developer</h4>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
        </article>
        <Image fluid={fluid} className="hero-img"></Image>
      </div>
    </header>
  )
}

export default Hero
