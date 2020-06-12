import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import { H1, P } from "../styles"

const ErrorPage = styled.div`
  height: 80vh;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorPage>
      <H1>NOT FOUND</H1>
      <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
    </ErrorPage>
  </Layout>
)

export default NotFoundPage
