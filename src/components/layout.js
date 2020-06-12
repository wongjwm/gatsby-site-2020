/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from 'styled-components';
import {
  DARK_GREEN,
} from '../styles';

const PageWrapper = styled.div`
  background-color: ${DARK_GREEN};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        <Footer/>
      </PageWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
