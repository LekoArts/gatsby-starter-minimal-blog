import React from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

import styles from './layout.module.css';

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <div>
      <main className={styles.layout}>
        <SEO />
        {children()}
      </main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
