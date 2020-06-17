import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';
import { device } from './device';

export const DARK_GREEN = '#063432';
export const YELLOW = '#E7CD56';
export const BRIGHT_TEAL = '#9CFFED';
export const LIGHT_GRAY = '#CACACA';
export const WHITE = '#FFFFFF';

export const Charter = "'Charter', serif";
export const Apercu = "'Apercu', sans-serif";

export const H1 = styled.h1`
  font-family: ${Charter};
  color: ${WHITE};
  font-weight: 800;
  font-size: 60px;
  margin-bottom: 25px;
  @media only screen and ${device.tablet} {
    font-size: 56px;
  }
  @media only screen and ${device.mobile} {
    font-size: 32px;
    margin-bottom: 15px;
  }
`

export const H2 = styled.h2`
  font-family: ${Charter};
  color: ${BRIGHT_TEAL};
  font-weight: 800;
  font-size: 38px;
  margin-bottom: 25px;
  @media only screen and ${device.tablet} {
    font-size: 32px;
  }
  @media only screen and ${device.mobile} {
    font-size: 26px;
  }
`

export const H3 = styled.h3`
  font-family: ${Charter};
  color: ${BRIGHT_TEAL};
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 25px;
  @media only screen and ${device.tablet} {
    font-size: 24px;
  }
  @media only screen and ${device.mobile} {
    font-size: 20px;
  }
`

export const P = styled.p`
  font-family: ${Apercu};
  color: ${WHITE};
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 25px;
  @media only screen and ${device.tablet} {
    font-size: 16px;
    margin-bottom: 22px;
  }
  @media only screen and ${device.mobile} {
    font-size: 14px;
    margin-bottom: 20px;
  }
`

export const SmallTag = styled(P)`
  color: ${LIGHT_GRAY};
  font-size: 14px;
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

