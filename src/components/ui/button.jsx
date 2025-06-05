import React from 'react';

export const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
  >
    {children}
  </button>
);