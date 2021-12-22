import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

const ProductsPage = ({data}) => {
    const products = data.allWcProducts.nodes;
    return (
        <Layout pageTitle='Store'>
          <div className='product-grid'>
            {
                products.map(product => {
                  const id = product.id
                  const productName = product.name
                  const category = product.categories
                  console.log(category)
                  const price = product.price
                  const productImage = {
                    src: getImage(product.images.localFile),
                    alt: product.images.alt || ``,
                  }
                  console.log(productImage.src)  
                  
                  return (
                    <section key={id}>
                      <h3>
                      <Link to={`/shop/${product.slug}`} itemProp='url'>
                        <span style={{color:'##1a202c'}} itemProp='headline'>{productName}</span>
                      </Link>
                      </h3>
                      <GatsbyImage
                          image = {productImage.src}
                          alt = {productImage.alt}
                      />
                      <p>Price : {price}</p>
                    </section>
                  )
              }
                )
            };
            </div>
        </Layout>
    );
};

export const query = graphql`
query GetProducts {
    allWcProducts {
        nodes {
          id
          name
          price
          slug
          description
          categories {
            name
          }
          images {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
  }
`;

export default ProductsPage;