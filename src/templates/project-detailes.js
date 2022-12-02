import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { GatsbyImage } from "gatsby-plugin-image"
import  * as styles from "../styles/project-detailes.module.css"

export default function ProjectDetailes({data}) {
  const html=data.markdownRemark.html

  const {title,stack,featuredImg} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.detailes} >
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
        <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData}  />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html:html}} />
      </div>
    </Layout>
  );
}

export const query = graphql`
query ProjectDetailes($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      stack
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`;
