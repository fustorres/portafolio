import React from 'react';
import aboutHtml from '../../acerca.html'; // import como string

const About = () => (
  <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
);

export default About;
