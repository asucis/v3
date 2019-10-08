import { graphql, useStaticQuery } from "gatsby";

const getEventData = () => {
  const {
    allMarkdownRemark: {
      edges: [
        {
          node: {
              frontmatter: { date, description, photo, title },
          },
        },
      ],
    },
  } = useStaticQuery(graphql`
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

  return {
    date,
    description,
    photo,
    title,
  };
};

export default getEventData;
