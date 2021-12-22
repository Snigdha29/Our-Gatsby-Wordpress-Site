import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const HomePage = () => {
    return(
        <Layout pageTitle='Home'>
            <h2>Welcome to our Website.</h2>
            <p>You can find a lot of cool stuff here.</p>
            <p>Check out our <Link to='/blog'>Blog</Link> or <Link to='/shop'>Store</Link> for the awesome stuff.</p>
        </Layout>
    );
};

export default HomePage;