import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h1>Design</h1>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester .</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  );
}

export const query = graphql`
query Design {
  file(relativePath: {eq: "design.png"}) {
    id
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;
