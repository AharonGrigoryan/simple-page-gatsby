const path = require("path");



exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const blogPostTemplate = path.resolve("./src/templates/project-detailes.js");
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    const path = `/projects/${node.frontmatter.slug}`
    createPage({
      path,
      component: blogPostTemplate,
      context: {slug:node.frontmatter.slug},
    });
  });
};
