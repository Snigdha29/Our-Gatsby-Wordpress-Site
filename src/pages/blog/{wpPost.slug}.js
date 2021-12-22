import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

//For Gutenberg block compatibility for images
import "../../css/@wordpress/block-library/build-style/style.css"
import "../../css/@wordpress/block-library/build-style/theme.css"

const WpPost = ({ data: { post } }) => {
    return (
        <Layout pageTitle={post.title}>
          <article
            className='blog-post'
            itemScope
            itemType='http://schema.org/Article'
          >
          <p>{post.date}</p>
          
          {!!post.content && (
           <section itemProp='articleBody' dangerouslySetInnerHTML = {{__html: (post.content)}}/>
          )}
          <hr />
          </article>

        </Layout>
    );
};

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
export default WpPost;