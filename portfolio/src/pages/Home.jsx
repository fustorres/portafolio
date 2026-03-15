import React from 'react';
import homeHtml from '../../index.html'; // import como string

const Home = () => (
  <div dangerouslySetInnerHTML={{ __html: homeHtml }} />
);

export default Home;