import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs-custom';
import {
  DARK_GREEN,
  YELLOW,
  BRIGHT_TEAL,
  H1,
  H2,
  P,
  RichTextLink,
  Strong
} from '../styles';

const AboutWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
`

const TextWrapper = styled.div`
padding-left: 50px;
padding-top: 100px;
`

const ProfileImage = styled.img`
  width: 40%;
  height: 100%;
`

const Title = styled(H2)`

`

const ContactLink = styled(Link)`

`

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
      <ProfileImage alt="temp" src={page.profile_picture.url}/>

      <TextWrapper>
        <Title>{page.about_title[0].text}</Title>
        <RichText
            richText={page.about_description}
            paragraph={P}
            hyperlink={RichTextLink}
            strong={Strong}
        />
        <H2>some of my current hobbies:</H2>
        <P>perfecting my cold brew, decorating my animal crossing island, and hand embroidery</P>
        <H2>contact me</H2>
        


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
