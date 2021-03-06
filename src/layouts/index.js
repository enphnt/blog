import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-media';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import './index.css';
import './styles/layout-override.css';

const title = "Nathan Phennel's Blog";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: title },
        { name: 'keywords', content: 'software testing, software development, javascript, software engineer in test' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1180,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 25px',
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 1180,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 25px 75px 25px',
              }}
            >
              <div style={{ flex: 2.5, paddingRight: '30px' }}>
                {children()}
              </div>
              <div style={{ flex: 1 }}>
                <Sidebar
                  title="Hi, I'm Nathan 👋🏻"
                  description="I use this space for writing down things I want to remember for future reference."
                />
                <Sidebar
                  title="Who am I? "
                  description="A Software Dev that's always learning about random things."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
