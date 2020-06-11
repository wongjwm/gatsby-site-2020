import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import {
  DARK_GREEN,
  YELLOW,
  BRIGHT_TEAL,
  H1,
  H2,
  P
} from '../styles';

const Hero = styled.div`
  margin: auto;
  background-color: ${DARK_GREEN};
  width: 60%;
  text-align: center;
`

const Subheader = styled(P)`
  color: ${YELLOW};
  font-weight: 800;
  font-size: 22px;
` 

const HeroDescription = styled(P)`
  max-width: 500px;
  margin: auto;
`

const ProjectsWrapper = styled.div`
  margin-top: 200px;
  text-align: center;
`

const ProjectText = styled.div`
  margin: auto;
  max-width: 30%;
  text-align: left;
  margin-bottom: 70px;
`

const ProjectTitle = styled(P)`
  font-size: 24px;
  color: ${YELLOW};
`

const ProjectDescription = styled(P)`

`

const ProjectSection = props => {
  const { title, image, description } = props;
  return (
    <ProjectText>
      <ProjectTitle>{title}</ProjectTitle>
      <P>{description}</P>
    </ProjectText>
  );
};

const IndexPage = ({ data }) => {
  const page = data.prismic.allHomepages.edges[0].node;

  const Projects = page.projects.map((project) => (
    <ProjectSection
      title = {project.title}
      description={project.description}
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
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
