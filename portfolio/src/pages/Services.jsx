import React from 'react';
import servicesHtml from '../../servicios.html'; // import como string

const Services = () => (
  <div dangerouslySetInnerHTML={{ __html: servicesHtml }} />
);

export default Services;