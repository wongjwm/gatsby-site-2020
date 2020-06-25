import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import {
  H2,
  P,
  YELLOW,
  Apercu,
  BRIGHT_TEAL
} from '../styles';

const HeaderWrapper = styled.header`
  overflow-x: hidden;
`

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.0rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavLinks = styled.div`
  display: flex;
`

const Logo = styled.img`
`

const NavLink = styled(Link)`
  font-size: 20px;
  font-family: ${Apercu};
  color: ${YELLOW};
  text-decoration: none;
  margin: 10px;
  padding-bottom: 8px;
  transition: all 0.6s;
  position: relative;
  &:before {
    content: "";
    width: 0;
    height: 0.1em;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${YELLOW};
    transition: all 0.3s;
  }
  &:hover {
    color: ${BRIGHT_TEAL};
    &:before {
      width: 100%;
      left: 0;
      background: ${BRIGHT_TEAL};
    }
  }
`

const ResumeLink = styled.a`
  font-size: 20px;
  font-family: ${Apercu};
  color: ${YELLOW};
  text-decoration: none;
  margin: 10px;
  padding-bottom: 8px;
  position: relative;
  &:before {
    content: "";
    width: 0;
    height: 0.1em;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${YELLOW};
    transition: all 0.3s;
  }
  &:hover {
    color: ${BRIGHT_TEAL};
    &:before {
      width: 100%;
      left: 0;
      background: ${BRIGHT_TEAL};
    }
  }
`

const HeaderWithoutData = props => {
  const { data } = props;
  const contactData = data.prismic.allContacts.edges[0].node;

  return (
    <HeaderWrapper>
      <Nav>
        <H2>
          <NavLink to="/"> JW </NavLink>
        </H2>
        <NavLinks>
          <H2>
            <NavLink to="/about"> about </NavLink>
          </H2>
          <H2>
            <ResumeLink href={contactData.resume.url}> resume </ResumeLink>
          </H2>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  )
}


export const data = graphql`
  {
    prismic {
      allContacts {
        edges {
          node {
            resume {
              ... on PRISMIC__FileLink {
                url
              }
            }
          }
        }
      }
    }
  }
`;


const Header = props => {
  return (
    <StaticQuery
      query={data}
      render={data => <HeaderWithoutData data={data} {...props} />}
    />
  );
};


export default Header
