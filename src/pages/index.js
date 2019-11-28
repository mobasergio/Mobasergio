import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Contact from "../components/Contact"

export default ({data}) => {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Work data={data}/>
      <Contact/>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          github
          external
          tech
        }
        excerpt
      }
    }
  }
}
`