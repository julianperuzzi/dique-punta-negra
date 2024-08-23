// src/components/BackButton.jsx
import React from 'react';

const BackButton = ({ onBack }) => {
  return (
    <button
      onClick={onBack}
      className="text-blue-500 hover:text-blue-700 font-semibold mb-4"
    >
      &larr; Back
    </button>
  );
};

export default BackButton;
