// ChatContent.jsx
import React from 'react';

const ChatContent = ({ option }) => {
  switch (option) {
    case 'actividades':
      return <div>Detalles sobre Actividades...</div>;
    case 'paradores':
      return <div>Información sobre Paradores...</div>;
    case 'como-llegar':
      return <div>Cómo llegar...</div>;
    case 'info-general':
      return <div>Información general...</div>;
    case 'contacto':
      return <div>Contacto y FAQs...</div>;
    default:
      return <div>Selecciona una opción.</div>;
  }
};

export default ChatContent;
