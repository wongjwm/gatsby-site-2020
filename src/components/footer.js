import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import {
  DARK_GREEN,
  YELLOW,
  BRIGHT_TEAL,
  H1,
  H2,
  P,
  Apercu
} from '../styles';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`

const FooterLinks = styled.div`

`

const StyledFooterLink = styled.a`
  font-size: 14px;
  color: ${YELLOW};
  font-family: ${Apercu};
  text-decoration: none;
  padding: 10px;
`

const FooterText = styled(P)`
  font-size: 14px;
  margin-left: 20px;
`

const TechLink = styled.a`
  color: ${YELLOW};
  text-decoration: none;
`

const FooterLink = props => {
  const { linkName, link } = props;
  return (
    <StyledFooterLink href={link}>{linkName}</StyledFooterLink>
  )
}

const FooterWithoutData = props => {
  const { data } = props;
  const contactData = data.prismic.allContacts.edges[0].node;

  const links = contactData.links.map((link) => (
    <FooterLink
      linkName={link.link_name}
      link={link.link.url}
    />
  ));

  return (
    <FooterWrapper>
      <FooterText>
      © {new Date().getFullYear()}, Built with {` `}
            <TechLink href="https://www.gatsbyjs.org">Gatsby</TechLink>
      </FooterText>
      <FooterLinks>
      {links}
      </FooterLinks>
    </FooterWrapper>
  );
}

export const data = graphql`
  {
    prismic {
      allContacts {
        edges {
          node {
            links {
              link {
                ... on PRISMIC__ExternalLink {
                  _linkType
                  url
                }
                ... on PRISMIC__FileLink {
                  _linkType
                  url
                }
              }
              link_name
            }
          }
        }
      }
    }
  }
`;

const Footer = props => {
  return (
    <StaticQuery
      query={data}
      render={data => <FooterWithoutData data={data} {...props} />}
    />
  );
};

export default Footer
