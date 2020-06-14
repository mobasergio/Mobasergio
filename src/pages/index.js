import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Favicon from "../assets/icon.png"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Work from "../components/Work"
import Contact from "../components/Contact"

export default ({data}) => {
  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>Sergio Moreno | Frontend web developer</title>
        <meta name="description" content="Sergio Moreno is a frontend web developer based in Barcelona, Spain who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications."/>  
        <link rel="icon" href={Favicon} />
      </Helmet>
      <Layout>
        <Hero/>
        <About/>
        <Work data={data}/>
        <Contact/>
      </Layout>
    </>
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