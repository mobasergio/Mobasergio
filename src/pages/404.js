import React from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Favicon from "../assets/icon.png"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en"/>
        <title>Error 404</title>
        <meta name="description" content="Sergio Moreno is a frontend web developer based in Barcelona, Spain who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications."/>  
        <link rel="icon" href={Favicon} />
      </Helmet>
      <Layout>
        <div id="notfound">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link to="/">Go Home</Link>
        </div>
      </Layout>
    </>
  );
}
 
export default NotFoundPage;