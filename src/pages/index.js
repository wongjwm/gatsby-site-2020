import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled, { keyframes } from 'styled-components';
import { device } from '../device';
import {
  DARK_GREEN,
  YELLOW,
  WHITE,
  BRIGHT_TEAL,
  LIGHT_GRAY,
  H1,
  H2,
  P,
  Apercu
} from '../styles';
import Line from "../images/line.svg"


const Hero = styled.div`
  margin: auto;
  background-color: ${DARK_GREEN};
  width: 70%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Subheader = styled(P)`
  color: ${YELLOW};
  font-weight: 800;
  font-size: 32px;
  @media only screen and ${device.tablet} {
    font-size: 24px;
  }
  @media only screen and ${device.tablet} {
    font-size: 20px;
  }
`

const HeroDescription = styled(P)`
  max-width: 600px;
  margin: auto;
  font-size: 30px;
  line-height: 1.3;
  color: ${LIGHT_GRAY};
`

const LineAnimation = styled.div`
`

const grow = keyframes`
  100% {
    height: 200px;
  }
`

const LineImg = styled.img`
  height: 0px;
  width: 100px;
  margin: auto;
  display: block;
  position: relative;
  animation: ${grow} 1s linear;
  animation-fill-mode: forwards;
`

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const ProjectsWrapper = styled.div`
  margin: 100px 0px 200px 0px;
  text-align: center;
  -webkit-animation: ${fadein} 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: ${fadein} 3s; /* Firefox < 16 */
   -ms-animation: ${fadein} 3s; /* Internet Explorer */
    -o-animation: ${fadein} 3s; /* Opera < 12.1 */
       animation: ${fadein} 3s;
`

const ProjectsHeader = styled(H2)`
  margin-bottom: 100px;
  font-size: 45px;
`

const HiddenProjectImg = styled.img`
  display: none;
  position: absolute;
`

const ProjectText = styled.div`
  margin: auto;
  max-width: 425px;
  text-align: left;
  margin-bottom: 60px;
  &:hover ${HiddenProjectImg} {
    display: inline;
    left: 10%;
    height: 200px;
    width: 200px;
  }
  @media only screen and ${device.tablet} {
    max-width: 50%;
    &:hover ${HiddenProjectImg} {
      display: none;
    }
  }
  @media only screen and ${device.mobile} {
    max-width: 80%;
  }
`

const ProjectTitle = styled(Link)`
  font-family: ${Apercu};
  color: ${YELLOW};
  font-size: 24px;
  font-weight: 800;
  text-decoration: none;
  margin-bottom: 50px;
  &:hover {
    color: ${BRIGHT_TEAL};
  }
  &:first-child {
    margin-top: 50px;
  }
`

const ProjectDescription = styled(P)`
  margin-top: 20px;
  color: ${LIGHT_GRAY};
`

const DescriptionWrapper = styled.div`
  display: flex;
`

const ProjectSection = props => {
  const { title, image, description, uid } = props;
  return (
    <ProjectText>
      <ProjectTitle to={`/project/${uid}`}>{title}</ProjectTitle>
      <DescriptionWrapper>
        <ProjectDescription>{description}</ProjectDescription>
        <HiddenProjectImg src={image.url} alt=""/>
      </DescriptionWrapper>
    </ProjectText>
  );
};

const IndexPage = ({ data }) => {
  const page = data.prismic.allHomepages.edges[0].node;
  const projects = data.prismic.allProjects.edges;

  const Projects = projects.map((project) => (
    <ProjectSection
      title = {project.node.project_name[0].text}
      description={project.node.preview_description}
      image={project.node.preview_image}
      uid={project.node._meta.uid}
    />
    )
  );

  return (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <H1>{page.header[0].text}</H1>
      <Subheader>{page.hero_subheader}</Subheader>
      <HeroDescription>{page.hero_description}</HeroDescription>
    </Hero>
    <LineAnimation>
      <LineImg src={Line}/>
    </LineAnimation>
    <ProjectsWrapper id='#work'>
      <ProjectsHeader>{page.projects_header}</ProjectsHeader>
      {Projects}
    </ProjectsWrapper>
  </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            header
            hero_subheader
            hero_description
            projects_header
          }
        }
      }
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
            project_name
            preview_description
            preview_image
          }
        }
      }
    }
  }
`;

export default IndexPage