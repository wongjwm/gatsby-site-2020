import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import {
  DARK_GREEN,
  YELLOW,
  BRIGHT_TEAL,
  H1,
  H2,
  P
} from '../styles';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`

const FooterLinks = styled.div`

`

const FooterLink = styled(Link)`

`

const Footer = () => (
  <FooterWrapper>
    <P>
    © {new Date().getFullYear()}, Built with {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </P>

    <FooterLinks>
      <FooterLink>GitHub</FooterLink>
      <FooterLink>Dribbble</FooterLink>
      <FooterLink>Linkedin</FooterLink>
    </FooterLinks>


  </FooterWrapper>
)

export default Footer
