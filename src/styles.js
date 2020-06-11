import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';

export const DARK_GREEN = '#063432';
export const YELLOW = '#E7CD56';
export const BRIGHT_TEAL = '#9CFFED';
export const WHITE = '#FFFFFF';

export const Charter = "'Charter', serif";
export const Apercu = "'Apercu', sans-serif";

export const H1 = styled.h1`
  font-family: ${Charter};
  color: ${WHITE};
  font-weight: 800;
  font-size: 60px;
  margin-bottom: 25px;
`

export const H2 = styled.h1`
  font-family: ${Charter};
  color: ${WHITE};
  font-weight: 800;
  font-size: 52px;
  margin-bottom: 25px;
`

export const P = styled.p`
  font-family: ${Apercu};
  color: ${WHITE};
  font-weight: normal;
  font-size: 22px;
  margin-bottom: 25px;
`