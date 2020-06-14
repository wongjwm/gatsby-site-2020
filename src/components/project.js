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
} from "../styles"
import { RichText } from 'prismic-reactjs-custom';

const PageWrapper = styled.div`
  padding: 5% 10% 20% 10%;
`

const BackLink = styled(Link)`
  color: ${WHITE};
  font-family: ${Apercu};
`

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  padding: 2%;
  border: 2px solid ${BRIGHT_TEAL};
`

const IntroSection = styled.div`
  display: flex;
`
const ProjectDescription = styled.div`
  flex: 1;
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

const ProjectWithoutData = ({ data }) => {

  const projectData = data.prismic.Project.edges[0] && data.prismic.Project.edges[0].node;
  const allProjects = data.prismic.AllProjects.edges;

  console.log(projectData);
  console.log(allProjects);

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
        <H2>{projectData.project_name[0].text}</H2>
        <HeroImage src={projectData.hero_image.url} alt=""/>
        <H3>overview</H3>
        <IntroSection>
          <ProjectDescription>
            <P>{projectData.project_description}</P>
          </ProjectDescription>
          <ProjectDetails>
            <DetailSection>
              <SmallTag>TOOLS</SmallTag>
              <div>{Tools}</div>
            </DetailSection>
            <DetailSection>
              <SmallTag>AREAS OF FOCUS</SmallTag>
              <div>{Types}</div>
            </DetailSection>
            <DetailSection>
              <SmallTag>ROLE</SmallTag>
              <P>{projectData.role}</P>
            </DetailSection>
          </ProjectDetails>
        </IntroSection>
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
