import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs-custom';
import Blob from '../images/blob-outline.svg';
import { device } from '../device';
import {
  BRIGHT_TEAL,
  YELLOW,
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
  @media only screen and ${device.tablet} {
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
  margin: 100px 0px 200px 100px;
  @media only screen and ${device.tablet} {
    margin: 0px 0px 200px 0px;;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
`
const ProfileImage = styled.img`
  max-width: 400px;
  height: auto%;
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
    color: ${BRIGHT_TEAL}
  }
`

const ContactLink = props => {
  const { linkName, link } = props;
  return (
    <StyledContactLink href={link} target="_blank" rel="noopener noreferrer">{linkName}</StyledContactLink>
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
    <SEO title="about" />
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
        <H3>{page.hobbies_title}</H3>
        <RichText
            richText={page.hobbies}
            listItem={P}
            hyperlink={RichTextLink}
            strong={Strong}
        />
        <H3>{page.contact_title}</H3>
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
            hobbies_title
            hobbies
            contact_title
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
