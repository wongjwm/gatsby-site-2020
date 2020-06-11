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
  width: 80%;
  margin: auto;
  display: flex;
`

const ProfileImage = styled.img`
  width: 40%;
  height: 100%;
`

const Title = styled(H2)`
  padding-left: 50px;
  padding-top: 100px;
`

const AboutPage = ({ data }) => {
  const page = data.prismic.allAbout_pages.edges[0].node;
  
  return (
  <Layout>
    <SEO title="About" />
    <AboutWrapper>
      <ProfileImage alt="temp" src={page.profile_picture.url}/>

      <div>
        <Title>{page.about_title[0].text}</Title>
      <P>{page.about_description.text}</P>
      {/* <RichText
          richText={page.about_description.text}
          paragraph={P}
          hyperlink={RichTextLink}
          strong={Strong}
        /> */}
        </div>
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
    }
  }
`;

export default AboutPage
