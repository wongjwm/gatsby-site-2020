import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';

export const DARK_GREEN = '#063432';
export const YELLOW = '#E7CD56';
export const BRIGHT_TEAL = '#9CFFED';
export const LIGHT_GRAY = 'FFFEFD';
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

export const H2 = styled.h2`
  font-family: ${Charter};
  color: ${BRIGHT_TEAL};
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 25px;
`

export const P = styled.p`
  font-family: ${Apercu};
  color: ${WHITE};
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 25px;
`

export const RichTextLinkStyle = styled.a`
  font-family: ${Apercu};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.6;
  color: ${BRIGHT_TEAL};
`;

export const RichTextLink = props => {
  return <RichTextLinkStyle {...props} target="_blank" rel="noreferrer" />;
};

export const Strong = styled.span`
  font-weight: 700;
`;

