import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import {
  DARK_GREEN,
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
  padding: 10px;
  &:hover {
    color: ${BRIGHT_TEAL};
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <H2>
        <NavLink to="/"> {siteTitle} </NavLink>
      </H2>
      <NavLinks>
        <H2>
          <NavLink to="/work"> work </NavLink>
        </H2>
        <H2>
          <NavLink to="/about"> about </NavLink>
        </H2>
        <H2>
          <NavLink to="/resume"> resume </NavLink>
        </H2>
      </NavLinks>


    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
