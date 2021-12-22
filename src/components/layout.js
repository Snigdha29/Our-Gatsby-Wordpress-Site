import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { container, heading, siteTitle, navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query GetSiteTitle {
        wp {
          generalSettings {
            title
          }
        }
      }      
  `);

    return (
        <div className = {container}>
            <title>{pageTitle} | {data.wp.generalSettings.title}</title>
            <main>
                <h1 className={siteTitle} >
                <StaticImage 
                    src = '../images/logo.png'
                    alt = 'Icon'
                    width = '40'
                    height = '40'
                />  {data.wp.generalSettings.title}</h1>
                <nav>
                    <ul className={navLinks} >
                        <li className={navLinkItem}>
                            <Link to='/' className={navLinkText}>
                                Home
                            </Link>
                        </li>

                        <li className={navLinkItem}>
                            <Link to='/blog' className={navLinkText}>
                                Blog
                            </Link>
                        </li>

                        <li className={navLinkItem}>
                            <Link to='/shop' className={navLinkText}>
                                Store
                            </Link>
                        </li>

                    </ul>
                </nav>
                <h2 className={heading}>{pageTitle}</h2>
                {children}
            </main>
        </div>
    );
};

export default Layout;