// ChatMenu.jsx
import React from 'react';

const ChatMenu = ({ onSelectOption }) => {
  return (
    <div className="flex flex-col space-y-4">
      <button onClick={() => onSelectOption('actividades')} className="btn-chat">
        Actividades
      </button>
      <button onClick={() => onSelectOption('paradores')} className="btn-chat">
        Paradores
      </button>
      <button onClick={() => onSelectOption('como-llegar')} className="btn-chat">
        Cómo llegar
      </button>
      <button onClick={() => onSelectOption('info-general')} className="btn-chat">
        Información general
      </button>
      <button onClick={() => onSelectOption('contacto')} className="btn-chat">
        Contacto
      </button>
    </div>
  );
};

export default ChatMenu;
