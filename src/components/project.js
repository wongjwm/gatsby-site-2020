import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"
import Layout from "./layout"

const ProjectWithoutData = ({ data }) => {

  // const projectData = data.prismic.Project.edges[0] && data.prismic.Project.edges[0].node;
  
  return (
    <Layout>
     hello
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
            _meta {
              uid
            }
            _linkType
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
