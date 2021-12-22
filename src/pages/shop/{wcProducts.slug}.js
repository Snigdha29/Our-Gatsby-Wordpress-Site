import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

//For Gutenberg block compatibility for images
import "../../css/@wordpress/block-library/build-style/style.css"
import "../../css/@wordpress/block-library/build-style/theme.css"

const WpPost = ({ data: { product } }) => {
    return (
        <Layout pageTitle={product.name}>
          <section>
            <strong>Category : {product.categories.name}</strong>
            <p>Price : {product.price}</p>
          </section>
        </Layout>
    );
};

export const pageQuery = graphql`
  query ProductById(
    $id: String!
  ) {
    product: wcProducts(id: { eq: $id }) {
        id
        name
        categories {
        name
        }
        price
        description      
    }
  }
`
export default WpPost;