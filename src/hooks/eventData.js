import { graphql, useStaticQuery } from "gatsby";

const getEventData = () => {
  const eventData = useStaticQuery(graphql`
    query eventDataQuery {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\\/event/"}}) {
        edges {
          node {
            frontmatter {
              date
              description
              photo
              title
            }
          }
        }
      }
    }
  `);
  
  if (!eventData) return null;
  return eventData;
};

export default getEventData;
