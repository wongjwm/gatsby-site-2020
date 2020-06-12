import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs-custom';
import Blob from '../images/blob-outline.svg';
import {
  DARK_GREEN,
  YELLOW,
  BRIGHT_TEAL,
  H1,
  H2,
  H3,
  P,
  RichTextLink,
  Strong,
  Apercu
} from '../styles';

const AboutWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
`

const TextWrapper = styled.div`
  margin: 100px 0px 200px 100px;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
`
const BlobDecoration = styled.img`
  position: absolute;
  width: 900px;
  height: 500px;
  left: 0px;
`

const StyledContactLink = styled.a`
  font-size: 24px;
  color: ${YELLOW};
  font-family: ${Apercu};
  text-decoration: none;
  padding-right: 20px;
  &:hover {

  }
`

const ContactLink = props => {
  const { linkName, link } = props;
  return (
    <StyledContactLink href={link}>{linkName}</StyledContactLink>
  )
}

const AboutPage = ({ data }) => {
  const page = data.prismic.allAbout_pages.edges[0].node;
  const contactData = data.prismic.allContacts.edges[0].node;

  const links = contactData.links.map((link) => (
    <ContactLink
      linkName={link.link_name}
      link={link.link.url}
    />
  ));
  
  return (
  <Layout>
    <SEO title="About" />
    <AboutWrapper>
      <ImageWrapper>
        <BlobDecoration alt="" src={Blob}/>
        <ProfileImage alt="temp" src={page.profile_picture.url}/>
      </ImageWrapper>

      <TextWrapper>
        <H2>{page.about_title[0].text}</H2>
        <RichText
            richText={page.about_description}
            paragraph={P}
            hyperlink={RichTextLink}
            strong={Strong}
        />
        <H3>some of my current hobbies:</H3>

        <P>perfecting my cold brew, decorating my animal crossing island, and hand embroidery</P>
        <H3>contact me</H3>
        {links}


      </TextWrapper>
    </AboutWrapper>

  </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allAbout_pages {
        edges {
          node {
            profile_picture
            about_title
            about_description
          }
        }
      }
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

export default AboutPage
