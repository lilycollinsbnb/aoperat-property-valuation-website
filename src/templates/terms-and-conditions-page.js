import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Content, { HTMLContent } from "../components/content";

// eslint-disable-next-line
export const TermsAndConditionsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TermsAndConditionsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const TermsAndConditionsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TermsAndConditionsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

TermsAndConditionsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TermsAndConditionsPage;

export const termsAndConditionsPageQuery = graphql`
  query TermsAndConditionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
