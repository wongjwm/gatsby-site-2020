import { StaticQuery, graphql, Link } from 'gatsby';
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
import ProjectContent from './ProjectContent';
import { device } from '../device';

const PageWrapper = styled.div`
  padding: 5% 10% 20% 10%;
`

const BackLink = styled(Link)`
  color: ${LIGHT_GRAY};
  font-family: ${Apercu};
  text-decoration: none;
  &:hover {
    color: ${BRIGHT_TEAL};
  }
`
const NextLink = styled(Link)`
  color: ${WHITE};
  font-family: ${Apercu};
`
const ProjectTitle = styled(H2)`
  margin-top: 20px;
`

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  padding: 2%;
  border: 2px solid ${BRIGHT_TEAL};
`

const IntroSection = styled.div`
  display: flex;
  @media only screen and ${device.tablet} {
    flex-direction: column;
  }
`
const ProjectDescription = styled.div`
  flex: 1;
  margin-right: 5%;
`

const ProjectDetails = styled.div`
  flex: 1;
  display: flex;
`

const DetailSection = styled.div`
  margin-right: 8%;
  &:last-child {
    margin-right: 0px;
  }
`
const ContentSection = styled.div`
  margin: 60px 0px;
`

const ProjectWithoutData = ({ data }) => {

  const projectData = data.prismic.Project.edges[0] && data.prismic.Project.edges[0].node;
  if (!projectData) return null;

  const projectContent = projectData && projectData.body;
  if (!projectContent) return null;

  const allProjects = data.prismic.AllProjects.edges;
  if (!allProjects) return null;

  const Content = projectContent && projectContent.map(contentBlock => <ProjectContent {...contentBlock} />)

  const Types = projectData.types.map((type) => {
    return (
      <P>{type.type}</P>
    );
  });

  const Tools = projectData.tools.map((tool) => {
    return (
      <P>{tool.tool}</P>
    );
  });

  return (
    <Layout>
      <PageWrapper>
        <BackLink to='/'>back to projects</BackLink>
        <ProjectTitle>{projectData.project_name[0].text}</ProjectTitle>
        <P>{projectData.preview_description}</P>
        <HeroImage src={projectData.hero_image.url} alt=""/>
        <H2>overview</H2>
        <IntroSection>
          <ProjectDescription>
            <P>{projectData.project_description}</P>
          </ProjectDescription>
          <ProjectDetails>
            <DetailSection>
              <SmallTag>AREAS OF FOCUS</SmallTag>
              <div>{Types}</div>
            </DetailSection>
            <DetailSection>
              <SmallTag>TOOLS</SmallTag>
              <div>{Tools}</div>
            </DetailSection>
            <DetailSection>
              <SmallTag>ROLE</SmallTag>
              <P>{projectData.role}</P>
            </DetailSection>
          </ProjectDetails>
        </IntroSection>
        <ContentSection>{Content}</ContentSection>
        <NextLink to='/'>next project</NextLink>
      </PageWrapper>
    </Layout>
  )
}

const data = graphql`
  query ProjectQuery ($uid: String) {
    prismic {
      AllProjects: allProjects {
        edges {
          node {
            project_name
            preview_description
            _meta {
              uid
            }
          }
        }
      }
      Project: allProjects(uid: $uid) {
        edges {
          node {
            project_name
            hero_image
            project_description
            role
            types {
              type
            }
            tools {
              tool
            }
            _meta {
              uid
            }
            _linkType
            body {
              ... on PRISMIC_ProjectBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_ProjectBodySection_header {
                type
                label
                primary {
                  section_header
                }
              }
              ... on PRISMIC_ProjectBodyImage_gallery {
                type
                label
                primary {
                  left_image
                  right_image
                  caption
                }
              }
              ... on PRISMIC_ProjectBodyTriple_image_gallery {
                type
                label
                primary {
                  left_image
                  center_image
                  right_image
                  caption
                }
              }
            }
          }
        }
      }
    }
  }
`;


const Project = props => {
  return (
    <StaticQuery
      query={data}
      render={data => <ProjectWithoutData data={data} {...props} />}
    />
  );
};

export default Project
