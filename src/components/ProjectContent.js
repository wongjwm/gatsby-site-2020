import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"
import Layout from "./layout"
import styled, { keyframes } from 'styled-components';
import { 
  H2, 
  H3, 
  P, 
  BRIGHT_TEAL,
  RichTextLink,
  Strong, 
  SmallTag,
  WHITE,
  Apercu,
  LIGHT_GRAY,
} from "../styles"
import { RichText } from 'prismic-reactjs-custom';

const ContentText = styled.div`
  max-width: 600px;
  margin-bottom: 50px;
`

const Header = styled(H2)`
  max-width: 400px;
`

const SectionHeader = props => {
  const { section_header } = props;
  return (
    <Header>{ section_header }</Header>
  );
};

const GalleryWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const DoubleImageGalleryWrapper = styled(GalleryWrapper)`
`

const TripleImageGalleryWrapper = styled(GalleryWrapper)`
`

const DoubleImage = styled.img`
  width: 50%;
  height: 50%;
  flex: 1;
  margin-bottom: 0px;
  /* TODO: make this work for ALL first children */
  &:first-child {
    margin-right: 2%;
  }
`

const TripleImage = styled.img`
  width: 30%;
  height: 30%;
  flex: 1;
  margin-bottom: 0px;
  margin-right: 2%;
  /* TODO: make this work for ALL first children */
  &:last-child {
    margin-right: 0%;
  }
`

const Caption = styled(P)`
  text-align: center;
  color: ${LIGHT_GRAY};
  font-size: 16px;
`

const Text = props => {
  const { text } = props;
  return (
    <ContentText>
      <RichText
          richText={text}
          paragraph={P}
          hyperlink={RichTextLink}
          strong={Strong}
          listItem={P}
        />
    </ContentText>
  );
};

const DoubleImageGallery = props => {
  const { left_image, right_image, caption } = props; 
  return (
    <div>
      <DoubleImageGalleryWrapper>
        <DoubleImage src={left_image.url} />
        <DoubleImage src={right_image.url} />
      </DoubleImageGalleryWrapper>
      <Caption>{caption[0].text}</Caption>
    </div>
  )
}


const TripleImageGallery = props => {
  const { left_image, center_image, right_image, caption } = props; 
  return (
    <div>
      <TripleImageGalleryWrapper>
        <TripleImage src={left_image.url} />
        <TripleImage src={center_image.url} />
        <TripleImage src={right_image.url} />
      </TripleImageGalleryWrapper>
      <Caption>{caption[0].text}</Caption>
    </div>
  )
}

const ProjectContent = props => {
  const { type, primary } = props;
  switch (type) {
    case 'section_header':
      return <SectionHeader {...primary}/>
    case 'text':
      return <Text {...primary} />
    case 'image_gallery':
      return <DoubleImageGallery {...primary} />
      case 'triple_image_gallery':
      return <TripleImageGallery {...primary} />
    default:
      return <P>{type}</P>
  }
};

export default ProjectContent;