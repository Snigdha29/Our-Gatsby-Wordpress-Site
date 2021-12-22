import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogPage = ({data}) => {
  const posts = data.allWpPost.nodes;

  return (
    <Layout pageTitle='Our Blog'>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title
          const featuredImage = {
            data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
            alt: post.featuredImage?.node?.alt || ``,
          }
          return (
            <li key={post.uri}>
              <article
                className='post-list-item'
                itemScope
                itemType='http://schema.org/Article'
              >
                <header>
                  <h2>
                    <Link to={`/blog${post.uri}`} itemProp='url'>
                      <span style={{color:'#1a202c'}} itemProp='headline'>{title}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                  {/* if we have a featured image for this post let's display it */}
                  {featuredImage?.data && (
                    <GatsbyImage
                      image={featuredImage.data}
                      alt={featuredImage.alt}
                      style={{ marginBottom: 50 }}
                    />
                  )}
                </header>
                <div dangerouslySetInnerHTML={{__html: (post.excerpt)}} />
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
};

export const pageQuery = graphql`
  query WordPressPostArchive{
    allWpPost(
      sort: { fields: [date], order: DESC }
    ) {
      nodes {
        uri
        date(formatString: "dddd, MMMM Do, YYYY")
        title
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                  aspectRatio: 1.8
                )
              }
            }
          }
        }
      }
    }
  }
`


export default BlogPage;