import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled, { keyframes } from 'styled-components';
import {
  DARK_GREEN,
  YELLOW,
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
  width: 60%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Subheader = styled(P)`
  color: ${YELLOW};
  font-weight: 800;
  font-size: 32px;
` 

const HeroDescription = styled(P)`
  max-width: 600px;
  margin: auto;
  font-size: 30px;
  line-height: 1.3;
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

const HiddenProjectImg = styled.img`
  display: none;
  position: absolute;
`

const ProjectText = styled.div`
  margin: auto;
  max-width: 30%;
  text-align: left;
  margin-bottom: 70px;
  &:hover ${HiddenProjectImg} {
    display: inline;
    left: 20%;
  }
`

const ProjectTitle = styled(Link)`
  font-family: ${Apercu};
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 50px;
  color: ${YELLOW};
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
  const { title, image, description } = props;
  return (
    <ProjectText>
      <ProjectTitle href="/">{title}</ProjectTitle>
      <DescriptionWrapper>
        <ProjectDescription>{description}</ProjectDescription>
        <HiddenProjectImg src={image.url} alt=""/>
      </DescriptionWrapper>
    </ProjectText>
  );
};

const IndexPage = ({ data }) => {
  const page = data.prismic.allHomepages.edges[0].node;
  const Projects = page.projects.map((project) => (
    <ProjectSection
      title = {project.title}
      description={project.description}
      image={project.image}
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
    <ProjectsWrapper>
      <H2>{page.projects_header}</H2>
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
            projects {
              title
              description
              image
            }
          }
        }
      }
    }
  }
`;

export default IndexPage