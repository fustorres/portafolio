import React from 'react';
import contactHtml from '../../contacto.html'; // import como string

const Contact = () => (
  <div dangerouslySetInnerHTML={{ __html: contactHtml }} />
);

export default Contact;